const socket = io();

//필드
const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const camerasSelect = document.getElementById("cameras");
//방만들기 함수
const welcome = document.getElementById("welcome");
const call = document.getElementById("call");


let myStream;
let muted = false;
let cameraOff = false;
let roomName;   // 생성한 소켓 방 이름
let myPeerConnection;

call.hidden=true;

//보유 카메라 가져오는 함수 드롭다운으로 카메라 보여주는 함수
async function getCameras(){
    try{
        const devices = await navigator.mediaDevices.enumerateDevices();        // user의 미디어 장치 가져오는 함수
        const cameras = devices.filter(device => device.kind ==="videoinput"); // kind 가 videoinput인 것만 가져옴 ( 카메라 찾기)
        const currentCamera = myStream.getVideoTracks()[0];
        cameras.forEach(camera => {                                            // 인식된 카메라들을 가져와서 드롭바로 보여주는 함수
            const option = document.createElement("option");
            option.value = camera.deviceId;
            option.innerText = camera.label;
            if(currentCamera.label == camera.label){
                option.selected = true;
            }
            camerasSelect.appendChild(option);
        })
        //console.log(devices);
    }catch(e){
        console.log(e);
    }
}


//카메라 , 마이크 켜는 기능
async function getMedia(deviceId){
    const initialConstrains = {     // camera가 없을때 사용되는 변수
        audio : true,
        video : { facingMode : "user"},
    };
    const cameraConstraints = {     // camera devided가 있을 때 사용 되는 변수
        audio : true,
        video : { devicedId : {exact : deviceId} },
    }
    try{
        myStream = await navigator.mediaDevices.getUserMedia(
            deviceId ? cameraConstraints : initialConstrains
        );
        //console.log(myStream);
        myFace.srcObject = myStream;
        if(!deviceId){       //드롭다운에 카메라들이 바꿀때마다 늘어나서 하나만 처음 인식됐을때만 출력하는 if문
            await getCameras();
        }
    } catch(e){
        console.log(e);
    }
}

//getMedia(); //  getMedia 실행

// 음소거 버튼 클릭했을때 음소거 on off 함수
function handleMuteClick(){
    myStream
        //버튼 눌렀을 때 enabled값을 true->false ,false ->true로 바꾸면서 음소거 처리
        .getAudioTracks()
        .forEach((track)=> (track.enabled =!track.enabled));
    if(!muted){
        muteBtn.innerText = "음소거 끄기";
        muted = true;
    }else{
        muteBtn.innerText = "음소거";
        muted = false;
    }
}

//카메라버튼 클릭했을때 카메라 on off 함수
function handleCameraClick(){
    //버튼 눌렀을 때 enabled값을 true->false ,false ->true로 바꾸면서 음소거 처리
    myStream
    .getVideoTracks()
    .forEach((track)=> (track.enabled =!track.enabled));
    if(!cameraOff){
        cameraBtn.innerText = "카메라 on";
        cameraOff = true;
    }else{
        cameraBtn.innerText = "카메라 off";
        cameraOff = false;
    }
}


async function handleCameraChange(){
    await getMedia(camerasSelect.value);
    if(myPeerConnection){
        const videoTrack  = myStream.getVideoTracks()[0];
        const videoSender = myPeerConnection
        .getSenders()
        .find((sender) => sender.track.kind ==="video");
        videoSender.replaceTrack(videoTrack);
    }
}




// 화면관련된 내용 숨기는 거


//버튼 눌렀을때 발생하는 eventlistener
muteBtn.addEventListener("click",handleMuteClick);
cameraBtn.addEventListener("click",handleCameraClick);
camerasSelect.addEventListener("input",handleCameraChange);

// ------------------------------------------------
//방 관련된 함수들





const welcomeForm = welcome.querySelector("form");

//미디어 시작 함수 원래 있던 html 을 숨기고 숨긴 걸 true로 변경해서 보이게 함 / media 를 실행
async function initCall(){
    welcome.hidden = true;
    call.hidden = false;
    await getMedia();
    makeConnection();
}


//방만들기 버튼 눌렀을 때 실행되는 함수
async function handleWelcomeSubmit(event){
    event.preventDefault();
    const input = welcomeForm.querySelector("input");
    await initCall();
    socket.emit("join_room", input.value); //input.value값에 다른걸 입력하면 그 값으로 가능
    roomName = input.value;
    input.value="";

}
 
welcomeForm.addEventListener("submit", handleWelcomeSubmit);

//Socket Code


//Peer A 가 offer 생성하고 서버에 offer 값 보내기
socket.on("welcome",async () => {
    const offer = await myPeerConnection.createOffer();
    myPeerConnection.setLocalDescription(offer);
    console.log("send the offer");
    socket.emit("offer", offer , roomName);
});

//Peer B가 A가 서버에 올린 offer를 받고 받은 offer를 가지고 answer로 변환
socket.on("offer",async(offer) =>{
    console.log("received the offer");
    myPeerConnection.setRemoteDescription(offer);
    const answer = await myPeerConnection.createAnswer();
    myPeerConnection.setLocalDescription(answer);
    socket.emit("answer",answer , roomName);
    console.log("send the answer");
});

socket.on("answer",answer=>{
    console.log("received the answer");
    myPeerConnection.setRemoteDescription(answer);
});

socket.on("ice", ice =>{
    console.log("received candidate");
    myPeerConnection.addIceCandidate(ice);

});


//RTC

//RTC 에서 사용하고 있는 미디어들 가져오는 코드 offer
function makeConnection(){
   
    myPeerConnection = new RTCPeerConnection({
        iceServers :[
            {
                urls: [
                    "stun:stun.l.google.com:19302",
                    "stun:stun1.l.google.com:19302",
                    "stun:stun2.l.google.com:19302",
                    "stun:stun3.l.google.com:19302",
                    "stun:stun4.l.google.com:19302",
                ],
            },
        ],
    });
    myPeerConnection.addEventListener("icecandidate",handleIce); //중계 프로토콜을 받기 위한 선언
    myPeerConnection.addEventListener("addstream",handleAddStream);
    myStream
    .getTracks()
    .forEach(track => myPeerConnection.addTrack(track , myStream));
}
//icecandidate가 함수 호출되면 socket에 ice를 보냄
function handleIce(data){
    console.log("send candidate");
    socket.emit("ice", data.candidate,roomName);

}

//stream이 add될 때마다 이벤트 데이터 확인하는 함수
function handleAddStream(data){
    const peerFace = document.getElementById("peerFace");
    peerFace.srcObject = data.stream;
}
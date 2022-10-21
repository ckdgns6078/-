import FacebookLogin from '@greatsumini/react-facebook-login';
function Facebook(){
    return (
        <FacebookLogin
            appId = "1480672229110640"
            onSuccess={(response) =>{
                console.log('Login Success!');
                console.log('id : ', response.id);
            }}
            onFail={(error)=>{
                console.log('Login Failed!');
                console.log('status : ',error.state);
            }}
            onProfileSuccess={(response)=>{
                console.log('Get Profile Success!');
                console.log('name: ',response.name);
            }}
            />
    )
}
export default Facebook;
import express from "express";
import path from "path";
import { Server } from "socket.io";
import http from "http";
const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug"); // 뷰 엔진을 pug로 하겠다
app.set("views", __dirname + "/src/views"); // 디렉토리 설정
app.use("/public", express.static(__dirname + "/src/public")); // public 폴더를 유저에게 공개 (유저가 볼 수 있는 폴더 지정)
app.get("/", (req, res) => res.render("home")); // 홈페이지로 이동할 때 사용될 템플릿을 렌더
app.get("/*", (req, res) => res.redirect("/")); // 홈페이지 내 어느 페이지에 접근해도 홈으로 연결되도록 리다이렉트 (다른 url 사용 안할거라)

const httpServer = http.createServer(app);
const wsServer  = new Server(httpServer);

wsServer.on("connection", socket => {
    socket.on("join_room", (roomName) => {
      socket.join(roomName);
      socket.to(roomName).emit("welcome");
    });
    socket.on("offer", (offer,roomName)=>{
      socket.to(roomName).emit("offer",offer);
    });
    socket.on("answer", (answer,roomName)=>{
      socket.to(roomName).emit("answer",answer);
    });
    socket.on("ice", (ice,roomName)=>{
      socket.to(roomName).emit("ice",ice);
    })
  });

const handleListen = () => console.log('Listening on http://localhost:3000');
httpServer.listen(3000,handleListen);


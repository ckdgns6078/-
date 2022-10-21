
import {React, useState}  from "react";
import Table from 'react-bootstrap/Table';
import Modal from "../Components/Modal";

const goCient = () => {
  window.location.href = 'http://localhost:3000/Client'
}



const Sekes = () => {
  return (
  
    

    <div>
      <div>
        <tr>
          <td>1번방</td>
          <td><button onClick={goCient}>1번방 입장하기</button></td>
          <td><button onClick={goCient}>회의 생성</button></td>
        </tr>

      </div>
    <Table striped>
     

    <thead>
      <tr>
        <th>번호</th>
        <th>회의 목록</th>
        <th>시간</th>
        <th>메모</th>
      </tr>
    </thead>

    <tbody>
      <tr onClick={goCient}>
        <td>1</td>
        <td>아이디어 1차회의</td>
        <td>2022-10-11 <br/> 21:31</td>
        <td>2</td>
      </tr>
      <tr>
      <td>1</td>
        <td>아이디어 1차회의</td>
        <td>2022-10-11 <br/> 21:31</td>
        <td>2</td>
      </tr>
      <tr>
      <td>1</td>
        <td>아이디어 1차회의</td>
        <td>2022-10-11 <br/> 21:31</td>
        <td>2</td>
      </tr>
      <tr>
      <td>1</td>
        <td>아이디어 1차회의</td>
        <td>2022-10-11 <br/> 21:31</td>
        <td>2</td>
      </tr>
      <tr>
      <td>1</td>
        <td>아이디어 1차회의</td>
        <td>2022-10-11 <br/> 21:31</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
    </tbody>
  </Table>
  
  </div>
  )
}

export default Sekes
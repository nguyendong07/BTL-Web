import React, { useContext } from 'react';
import Menu from '../Menu/Menu';
import HeaderElement from '../Header/HeaderElement';
import '../resultRegister/resultRegister.css';
import { RegisterContext } from '../Context/RegisterContext';
export default function () {
  const { register } = useContext(RegisterContext);
  console.log(register)
  return (
    <div id="container-result-register">
      <HeaderElement></HeaderElement>
      <div id="frame-result-register">
        <Menu></Menu>
        <div id="result-register">
        <h3>Danh sách các môn thi đã đăng kí thi</h3>   
        {register.length>0 && 
        <div>
          <div style = {{float : 'left', marginLeft : "12px" }}>
           <pre> Họ tên : {register[0].studentName}  </pre> 
           <pre> Lớp : {register[0].classStudent} </pre> 
          </div>
           <div>
           <pre>Mã sinh viên : {register[0].studentID}</pre>
           </div>
        </div>}
           <div id = "table-result-register">    
           <table border = "1"> 
          <thead>
          <td> Mã môn  </td>
          <td>Tên môn</td>
          <td>Phòng thi</td>
          <td>Ngày thi</td>
          <td>Thời gian thi</td>
          </thead>
          <tbody>
            {register.map(item=>(
              <tr>
                <td>{item.courseID}</td>
                <td>{item.courseName}</td>
                <td>{item.room}</td> 
                <td>{item.dateTime.slice(0,item.dateTime.indexOf('T'))}</td>
                <td>{item.startTime}-{item.endTime}</td>       
              </tr>
            ))}
         </tbody>
         </table>
           </div>
        </div>
      </div>
    </div>
  )
}



{/* <table border = "1">
              <thead >
                <td>Mã môn</td>
                <td>Tên môn</td>
                <td>Phòng</td>
                <td>Thời gian</td>
              </thead>
              <tbody>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tbody>
            </table> */}
import React, { useContext } from 'react';
import Menu from '../Menu/Menu';
import HeaderElement from '../Header/HeaderElement';
import '../resultRegister/resultRegister.css';
import { RegisterContext } from '../Context/RegisterContext';
import Pdf from 'react-to-pdf';
export default function () {
  const { register } = useContext(RegisterContext);
   const options = {
    orientation: 'landscape',

  } 
  const printElement = React.createRef();
  return (
    <div id="container-result-register">
      <HeaderElement></HeaderElement>
      <div id="frame-result-register">
        <Menu></Menu>
        <div id="result-register" ref={printElement}>
          <h3>Danh sách các môn thi đã đăng kí thi</h3>
          {register.length > 0 &&
            <div>
              <div id="abc" >
                <pre> Họ tên : {register[0].studentName}  </pre>
                <pre> Lớp : {register[0].classStudent} </pre>
              </div>
              <div id="bcd">
                <pre>Mã sinh viên : {register[0].studentID}</pre>
                <pre>Năm học : 2019 - 2020</pre>
              </div>
            </div>}
          <div id="table-result-register">
            <table border="1">
              <tr>
                <th> Mã môn  </th>
                <th>Tên môn</th>
                <th>Phòng thi</th>
                <th>Ngày thi</th>
                <th>Thời gian thi</th>
              </tr>
              <tbody>
                {register.map(item => (
                  <tr>
                    <td>{item.courseID}</td>
                    <td>{item.courseName}</td>
                    <td>{item.room}</td>
                    <td>{item.dateTime.slice(0, item.dateTime.indexOf('T'))}</td>
                    <td>{item.startTime}-{item.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pdf targetRef={printElement} filename={"ketquadangky.pdf"} options={options}>
        {({toPdf})=><button id="buttonPDF" onClick={toPdf}>In ra PDF</button>}
      </Pdf>
    </div>
  )
}



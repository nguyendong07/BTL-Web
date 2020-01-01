import React, { useContext } from 'react';
import Menu from '../Menu/Menu';
import HeaderElement from '../Header/HeaderElement';
import '../resultRegister/resultRegister.css';
import { RegisterContext } from '../Context/RegisterContext';
export default function () {
  // constructor(){
  //   super()
  //   this.state = {
  //     name : '',
  //     id : '',
  //     class : '',
  //     email : ''
  //   }
  // }
  // componentDidMount() {
  //   const url =`${URL_GET_STUDENT_INFO}/${studentID}`;      
  //   Axios.get(url).then(rs=>{
  //       console.log(rs.data[0])
  //       this.setState({
  //           name: rs.data[0].studentName,
  //           id: rs.data[0].studentID,
  //           email:rs.data[0].email,
  //           class: rs.data[0].classStudent
  //       })
  //   })
  // }
  const { register } = useContext(RegisterContext);
  console.log(register)
  return (
    <div id="container-result-register">
      <HeaderElement></HeaderElement>
      <div id="frame-result-register">
        <Menu></Menu>
        <div id="result-register">
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
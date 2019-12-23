// import React, { Component } from 'react';
// import computer from './computer.jpg';
// import '../Room/Room.css'
// import Axios from 'axios';

// class Room extends Component {
//     constructor() {
//         super();
//         this.state = {
//             roomInfor: []
//         }
//     }

//     componentDidMount() {
//         Axios.get('http://192.168.1.105:4000/Information').then(rs => {
//             this.setState({ roomInfor: rs.data })
//         })
//     }
//     render() {
//         return (
//             <div id = "container" style = {
//                 {height : "200px", 
//                 width : "180px", borderRadius : "12px",
//                 border : "1px solid black"}
//                 }>
//                <div id = "nameroom" style  = {
//                    {textAlign : "center" ,
//                    paddingTop : "6px"}}>Phòng {this.state.roomInfor.Room}</div>
//                 <div id = "image" style = {
//                     {paddingBottom : "12px", 
//                     paddingTop : "10px", 
//                     paddingLeft :"15px"}} >
//                     <img height = "120px" width = "140px" alt= "Computer" src = {computer}></img> 
//                 </div>
//                 <div id="numbercomputer" style={{ textAlign: "center" }}>
//                     <pre style={{ fontFamily: "sans-serif" }}>
//                         Số máy : {this.state.roomInfor.Slot}
//                     </pre>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Room;
import React, { Component } from 'react';
import '../Room/Room.css';
import {alert} from 'react';
class Room extends Component {
    constructor(){
        super();
        this.state = {
            classInfor : [{courseName : 'Toán rời rạc', roomName : '307 - G2', Slot : '30', Date:'23-12-2020', Time : '7:30:00'   },{courseName : 'Xác suất thống kê', roomName : '308-G2', Slot : '20', Time : '13:00:00', Date : '28-12-2019'}]
        }
    }   
    render() {
        return (
            <div id = "frame-room">
                {this.state.classInfor.map(course=>{
                  return  (
                   <div id = "frameSubject" onClick = {this.resultRegister}> 
                   <div style = {{float : "left"}}>
                   <pre style = {{fontSize : "20px", margin : "5px"}}>Phòng : {course.roomName}</pre>
                   <pre style = {{ marginLeft : "15px"}}>Số máy : {course.Slot}/50 </pre>
                   </div>
                   <div style = {{float : "right"}}>
                   <p style = {{float : "right", fontSize : "18px", marginRight : "20px"}}>Thời gian {course.Time} Ngày {course.Date}  </p>
                   </div>
                   </div>   
                  )
                })}
            </div>
        );
    }
}

export default Room;
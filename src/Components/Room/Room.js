import React, { Component } from 'react'
import '../Room/Room.css'
import axios from 'axios'
class Room extends Component {
    constructor(){
        super()
        this.state = {
            classInfor : [{courseName : 'Toán rời rạc', roomName : '307 - G2', Slot : '30', Date:'23-12-2020', Time : '7:30:00'   },{courseName : 'Xác suất thống kê', roomName : '308-G2', Slot : '20', Time : '13:00:00', Date : '28-12-2019'}]
        }
    }
    
    componentDidMount() {
        let host = 'http://192.168.1.105:4000/'

        // axios.get(host + 'getRoomInfo', {
        //     subName: this.state.subName
        // })
        //     .then((res) => {
        //         console.log(res)
        //         console.log(this.state.subName)
        //     })
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
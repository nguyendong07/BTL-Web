import React, { useState } from 'react'
import '../Room/Room.css'
import axios from 'axios'

export function Room() {
    const [roomInfor, setRoomInfor] = useState([])

    const host = 'http://localhost:4000/'
    let getToken = localStorage.getItem('token')

        axios.get(host + 'getRoomInfo/trr', {
            headers: {
                Authorization: 'Bearer ' + getToken
            }
        })
            .then((res) => {
                setRoomInfor(res.data)
            })

    if(roomInfor.length === 0){
        return(<div></div>)
    }else
    return (
        <div id="frame-room">
            {roomInfor.map(( course, index ) => {
                return (
                    <div id="frameSubject" >
                        <div style={{ float: "left" }}>
                            <pre style={{ fontSize: "20px", margin: "5px" }}>Phòng : {course.maphongthi}</pre>
                            <pre style={{ marginLeft: "15px" }}>Số máy : {course.soluong}/50 </pre>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ float: "right", fontSize: "18px", marginRight: "20px" }}>Thời gian {course.thoigian}</p><br></br>
                            <p style={{ float: "right", fontSize: "18px", marginRight: "20px" }}>{course.ngay}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Room
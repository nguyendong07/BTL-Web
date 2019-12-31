import React,{useState} from 'react'
import '../Room/Room.css'

//import {SubjectContext} from '../Context/SubjectContext'
export function Room(props) {
    const {roomInfo} = props
    return (
        <div id="frame-room">
            {roomInfo.map(course => {
                return (
                    <div id="frameSubject" >
                        <div style={{ float: "left" }}>
                            <pre style={{ fontSize: "20px", margin: "5px" }}>Phòng : {course.room}</pre>
                            <pre style={{ marginLeft: "15px" }}>Số máy : {course.slot}/{course.totalSlot} </pre>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ float: "right", fontSize: "18px", marginRight: "20px" }}>Thời gian {course.startTime}-{course.endTime} Ngày {course.dateTime.slice(0,course.dateTime.indexOf('T'))}  </p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
export default Room
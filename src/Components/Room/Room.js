import React, { useContext } from 'react'
import '../Room/Room.css'
import Axios from 'axios';
import { URL_REGISTER_EXAMS } from '../../Config/Api';
import { RegisterContext } from '../Context/RegisterContext';
//import {SubjectContext} from '../Context/SubjectContext'
export function Room(props) {
    const { roomInfo } = props;
    const { getRegister } = useContext(RegisterContext);
    //console.log(roomInfo);
    function handleRegister(courseInfo) {
        return () => {
            const formData = new FormData();
            formData.append('examID', courseInfo.examID);
            formData.append('room', courseInfo.room);
            formData.append('courseName', courseInfo.courseName)
            formData.append('scheduleID', courseInfo.scheduleID)
            formData.append('courseID', courseInfo.courseID)
            formData.append('token', localStorage.getItem('token'))
            Axios.post(URL_REGISTER_EXAMS, formData).then(rs => {
                //console.log(rs);
                alert(rs.data.sqlMessage)
                getRegister();
            })
        }
    }
    return (
        <div
            style={{ float: 'right', marginTop: "20vh" }}
        >
            {roomInfo.map(course => {
                return (
                    <div id="frameSubject" onClick={handleRegister(course)}>
                        <div style={{ float: "left" }}>
                            <pre id = "course-room">Phòng : {course.room}</pre>
                            <pre style={{ marginLeft: "15px" }}>Số máy : {course.slot}/{course.totalSlot} </pre>
                        </div>
                        <div style={{ float: "right" }}>
                            <p id = "course-time" style = {{fontSize : "18px"}}>Thời gian {course.startTime}-{course.endTime} Ngày {course.dateTime.slice(0, course.dateTime.indexOf('T'))}  </p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
export default Room
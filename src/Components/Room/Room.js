import React, { useContext } from 'react'
import '../Room/Room.css'

import {SubjectContext} from '../Context/SubjectContext'
export function Room() {
    const { courseInfor } = useContext(SubjectContext)
    return (
        <div id="frame-room">
            {courseInfor.map(course => {
                return (
                    <div id="frameSubject" >
                        <div style={{ float: "left" }}>
                            <pre style={{ fontSize: "20px", margin: "5px" }}>Phòng : {course.maphongthi}</pre>
                            <pre style={{ marginLeft: "15px" }}>Số máy : {course.Slot}/50 </pre>
                        </div>
                        <div style={{ float: "right" }}>
                            <p style={{ float: "right", fontSize: "18px", marginRight: "20px" }}>Thời gian {course.Time} Ngày {course.Date}  </p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Room
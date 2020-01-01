import React, { useState, useEffect } from 'react';
import HeaderElement from '../../Header/HeaderElement';
import MenuTeacher from '../../MenuTeacher/MenuTeacher';
import Axios from 'axios';
import { URL_GET_EXAMS_OF_SCHEDULE } from '../../../Config/Api';
import './ExamsOfSchedule.css';
export default function (props) {
  const [exams, setExams] = useState([])


  useEffect(() => {
    getExams()
  }, [])

  function getExams() {
    const scheduleID = props.match.params.scheduleID;
    const url = `${URL_GET_EXAMS_OF_SCHEDULE}/${scheduleID}`
    Axios.get(url).then(rs => {
      // console.log(rs.data);
      setExams(rs.data);
    })
  }

 



  return (
    <React.Fragment>
      <HeaderElement></HeaderElement>
      <div id="container-examsofschedule"
        style={{ float: "left" }}>
        >
        <MenuTeacher></MenuTeacher>
      </div>
      <div id="frame-examsofshedule"
        style={{ float: 'right', marginTop: "20vh" }}
      >
        
        {exams.map(item => {
          return (
            <div id="frameSchedule">
              <p style={{ fontSize: "18px" }}> Môn thi: {item.courseName} - {item.courseChar} </p><br /><br />
              <p style={{ fontSize: '16px', fontStyle: 'italic' }}>  Thời gian thi từ: {item.startTime} - {item.endTime}</p>
              <p style={{ float: 'right', position: 'relative', bottom: '40px', right: '10px', fontSize: '16px', fontStyle: 'italic' }}> Phòng : {item.room}<br />
              </p>
            </div>
          )
        })}
        
      </div>
    </React.Fragment>
  )
}
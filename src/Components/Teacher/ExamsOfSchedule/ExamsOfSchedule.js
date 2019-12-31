import React, { useState, useEffect } from 'react';
import HeaderElement from '../../Header/HeaderElement';
import MenuTeacher from '../../MenuTeacher/MenuTeacher';
import Axios from 'axios';
import {URL_GET_EXAMS_OF_SCHEDULE} from '../../../Config/Api';
import './ExamsOfSchedule.css';
export default function(props){
  const [exams,setExams]=useState([]);
  useEffect(()=>{
    getExams();
  },[])

  function getExams(){
    const scheduleID = props.match.params.scheduleID;
    const url = `${URL_GET_EXAMS_OF_SCHEDULE}/${scheduleID}`
    Axios.get(url).then(rs=>{
      console.log(rs.data);
      setExams(rs.data);
    })
  }
  return(
    <React.Fragment>
      <HeaderElement></HeaderElement>
      <div id = "container-examsofschedule">
      <MenuTeacher></MenuTeacher>
      <div id="frame-examsofshedule">
        {exams.map(item => {
          return (              
            <div id="frameSchedule">
                <p style = {{fontSize : "18px"  }}> Môn thi: {item.courseName} - {item.courseChar}<br /><br/>
                    Thời gian thi từ: {item.startTime} đến {item.endTime} Phòng : {item.room}<br />
                </p>
            </div>
          )
        })}
      </div>
      </div>
    </React.Fragment>
  )
}
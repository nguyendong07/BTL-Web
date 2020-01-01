import React, { useState, useEffect } from 'react';
import HeaderElement from '../../Header/HeaderElement';
import MenuTeacher from '../../MenuTeacher/MenuTeacher';
import './ListScheduleExams.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { URL_GET_SCHEDULE } from '../../../Config/Api';
export default function () {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    getSchedule();
  }, [])

  function getSchedule() {
    Axios.get(URL_GET_SCHEDULE).then(rs => {
      setSchedule(rs.data);
    })
  }
  return (
    <React.Fragment>
      <HeaderElement></HeaderElement>
      <div id="container-listschedule" 
      style={{ float: "left"}}>
        <MenuTeacher></MenuTeacher>
        </div>
        <div id="frame-listschedule"
          style={{ float:'right',marginTop:"20vh" }}
        >
          {schedule.map(item => {
            const url = `/Teacher/Schedule/${item.scheduleID}`
            return (
              // <div style={{ textDecoration: 'none' }}>
              <Link to={url} style={{ textDecoration: 'none' }} >
                <div id="frameSchedule" >
                  <p > Kì thi: {item.scheduleID}<br />
                    Năm học: {item.schoolYear}<br />
                  </p>
                </div>
              </Link>
              // </div>
            )
          })}
        </div>
    </React.Fragment>
  )
}
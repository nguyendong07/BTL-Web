import React, { useState, useEffect } from 'react';
import HeaderElement from '../../Header/HeaderElement';
import MenuTeacher from '../../MenuTeacher/MenuTeacher';
import Axios from 'axios';
import {URL_GET_EXAMS_OF_SCHEDULE} from '../../../Config/Api';
export default function(props){
  const [exams,setExams]=useState([]);
  useEffect(()=>{
    getExams();
  },[])

  function getExams(){
    const scheduleID = props.match.params.scheduleID;
    const url = `${URL_GET_EXAMS_OF_SCHEDULE}/${scheduleID}`
    Axios.get(url).then(rs=>{
      setExams(rs.data);
    })
  }
  return(
    <React.Fragment>
      <HeaderElement></HeaderElement>
      <MenuTeacher></MenuTeacher>
      <div id="frame">
        {exams.map(item => {
          return (              
            <div id="frameSchedule">
                <p>scheduel ID: {item.examID}<br />
                    school year: {item.scheduleID}<br />
                </p>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}
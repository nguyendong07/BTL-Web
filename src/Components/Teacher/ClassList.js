import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import {URL_GET_ALLCOURSES} from '../../Config/Api';
export default function (){
    const [courseInfor,setCourseInfor] = useState([]);
    useEffect(()=>{
        Axios.get(URL_GET_ALLCOURSES).then(rs => {
            //console.log(rs.data);
           setCourseInfor(rs.data)
        })
    },[])
    function renderClass() {
        return (
            <div id="frame" style = {{marginTop : "20vh"}}>
                {courseInfor.map(course => {
                    const url = `/Teacher/StudentOfSubject/${course.courseID}/${course.courseChar}`;
                    return (
                        <Link to={url} style={{ textDecoration: 'none' }}>
                            <div id="frameSubject">
                                <p>
                                    {course.courseName}
                                </p>
                                <p style={{ float: "right", marginRight: 10, fontSize: 16, }}>
                                    Học kỳ: {course.schoolYear}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
    return(

        <div >
        <HeaderElement/>
        <div style =  {{float: 'left'}}>
            <MenuTeacher/>
        </div>    
        <div style = {{float : 'right'}}>
            {renderClass()}
        </div>
        
        </div >
    )
}

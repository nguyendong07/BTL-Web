import React, {useContext } from 'react'
import '../Subject/Subject.css'
import { Link } from 'react-router-dom'
import {SubjectContext} from '../Context/SubjectContext'

export default function(){
    const { courseInfor } = useContext(SubjectContext)
    return (
        <div id="frame">
            {courseInfor.map(course => {
                return (
                    <Link to={'/GroupClass'} style = {{textDecoration : 'none', color :  'red'}}>
                    <div id="frameSubject">
                        <p style =  {{color : 'black'}}>{course.tenmonthi}</p>
                        <pre style={{ float: "right", marginRight: "20px" }}>Năm học : 2019-2020</pre>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}
    import React, { Component } from 'react';
    import '../Subject/Subject.css';
    import {Link} from 'react-router-dom';

    class Subject extends Component {
        constructor(){
            super();
            this.state = {
                courseInfor : [{courseName : 'Toán rời rạc', schoolYear : '2019 - 2020'},{courseName : 'Xác suất thống kê', schoolYear : '2019 - 2020'}]
            }
        }   
        render() {
            return (
                <div id = "frame">
                    {this.state.courseInfor.map(course=>{
                    return  (
                    <div id = "frameSubject"> 
                    <p><Link to = "/GroupClass">{course.courseName}</Link></p>
                    <pre style = {{float: "right", marginRight : "20px"}}>Năm học : {course.schoolYear}</pre>
                    </div>   
                    )
                    })}

                </div>
            );
        }
    }

    export default Subject;
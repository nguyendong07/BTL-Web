import React, { Component } from 'react';


class Subject extends Component {
    constructor(){
        super();
        this.state = {
            courseInfor : [{courseName : 'Toan roi rac', schoolYear : '2019'},{courseName : 'Choi game', schoolYear : '2020'}]
        }
    }
    
    render() {
        return (
            <div id = "frame" style = {{border : "1px solid black", height : "400px", margin : "20px", width : "1030px" , borderRadius : "13px"}}>
                {this.state.courseInfor.map(course=>{
                  return  (<p>{course.courseName}</p>)
                })}

            </div>
        );
    }
}

export default Subject;
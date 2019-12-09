import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <div id = "frame" style = {{border : "1px solid black", height : "80px", margin : "20px", width : "1030px" , borderRadius : "13px"}}>
                <div id = "namesubject" style = {{margin : "10px"}}>
                      <p>Xác suất thống kê</p>
                </div>
                <div id = "time" style = {{float : "right", marginBottom : "10px", marginRight : "10px"}} >
                      <p>Năm học 2018-2019</p>
                </div>
            </div>
        );
    }
}

export default Subject;
import React, { Component } from 'react';
import '../FrameInformation/FrameInformation.css'
class FrameInformation extends Component {
    constructor() {
        super()
        this.state = {
            name : '',
            id : '',
            class : '',
            email : ''
        }
    }

    render() {
        return (
            <div id = "container" style = {
                {height : "450px", 
                width : "1000px",  
                border : "1px solid black",  
                marginTop : "35px", marginLeft : "40px",
                borderRadius : "12px",
                backgroundColor: "#e6ffff"
            }}>
                <div id = "photo" style = {
                    {border: "1px solid black",
                    height : "200px", 
                    width : "150px", 
                    margin : "30px",
                    borderRadius : "12px", 
                    float : "left"}} ></div>
                <div id = "infor" style = {
                    {float : "right", 
                    marginRight : "500px", 
                    marginTop : "30px", 
                    borderRadius : "12px"}}  >
                     <ul>
                         <li id = "if">Họ tên : {this.state.name} </li>
                         <li id = "if">Mã sinh viên : {this.state.id}</li>
                         <li id = "if">Lớp : {this.state.class} </li>
                         <li id = "if">Email : {this.state.email}</li>
                     </ul>
                </div>
                <div >
                    
                </div>
            </div>
        );
    }
}

export default FrameInformation;
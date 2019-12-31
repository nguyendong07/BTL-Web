import React, { Component } from 'react';
import '../FrameInformation/FrameInformation.css'
import Axios from 'axios';
import {URL_GET_STUDENT_INFO} from '../../Config/Api';
class FrameInformation extends Component {
    constructor() {
        super()
        this.state = {
            name : '',
            id : '',
            class : 'bbbb',
            email : ''
        }
    }
    componentDidMount(){
        const studentID = localStorage.getItem('userName');
        const url =`${URL_GET_STUDENT_INFO}/${studentID}`;
        Axios.get(url).then(rs=>{
            this.setState({
                name: rs.data.studentName,
                id: rs.data.studentID,
                email:rs.data.email
            })
        })
    }
    render() {
        return (
            <div id = "container" style = {
                {height : "70vh", 
                width : "68vw",  
                border : "1px solid black",  
                top : "21vh",
                left : "23vw",
                borderRadius : "12px",
                backgroundColor: "#e6ffff",
                position :"fixed"
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
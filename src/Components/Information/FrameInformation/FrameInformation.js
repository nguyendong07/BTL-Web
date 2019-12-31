import React, { Component } from 'react';
import './FrameInformation.css';
import {URL_GET_STUDENT_INFO} from '../../../Config/Api';
import Axios from 'axios'
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
    componentDidMount(){
        const studentID = localStorage.getItem('userName');
        const url =`${URL_GET_STUDENT_INFO}/${studentID}`;      
        Axios.get(url).then(rs=>{
            console.log(rs.data[0])
            this.setState({
                name: rs.data[0].studentName,
                id: rs.data[0].studentID,
                email:rs.data[0].email,
                class: rs.data[0].classStudent
            })
        })
    }
    render() {
        return (
            <div id = "cointainer-information">
                <div id = "photo"></div>
                  <div id = "infor" >
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
import React, { Component } from 'react';
import './FrameInformation.css'
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
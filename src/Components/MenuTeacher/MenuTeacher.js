import React, { Component } from 'react';
import '../MenuTeacher/MenuTeacher.css';
import {Link} from 'react-router-dom';
class MenuTeacher extends Component {
    render() {
        return (
            <div id = "body"  > 
                  <div id = "areahead"><p><Link to = "#" style = {{textDecoration : 'none', color : "black"}}>Nhập danh sách sinh viên</Link></p></div> 
                  <div id = "area" ><p><Link to = "#" style = {{textDecoration : 'none',  color : "black"}}>Quản lý phòng thi</Link></p></div>
            </div>
        );
    }
}
export default MenuTeacher;
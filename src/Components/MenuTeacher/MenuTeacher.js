import React, { Component } from 'react';
import '../MenuTeacher/MenuTeacher.css';
import { Link } from 'react-router-dom';

class MenuTeacher extends Component {
    render() {
        return (
            <div id="body-menu-teacher">
                 <Link to="/Teacher/ListStudent"
                            style={{
                                textDecoration: 'none',
                                color: "black",
                            }}>
                <div id="areahead-teacher">
                    <p>
                            Quản lý sinh viên
                       
                    </p> </div>
                    </Link>
                    <Link to="/Teacher/AddClass"
                            style={{
                                textDecoration: 'none',
                                color: "black"}}>
                            <div id="area-teacher" >
                       <p style = {{display : 'flex'}}>
                            Quản lý môn thi </p>
                </div >
                </Link>
                <Link to="/Teacher/Schedule"
                            style={{
                                textDecoration: 'none',
                                color: "black",
                            }}>
                <div id="area-teacher" >
                    <p>
                             Quản lý ca thi      
                    </p>
                </div >
                </Link>
            </div >

        );
    }
}
export default MenuTeacher;
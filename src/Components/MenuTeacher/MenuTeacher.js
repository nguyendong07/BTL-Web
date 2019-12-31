import React, { Component } from 'react';
import '../MenuTeacher/MenuTeacher.css';
import { Link } from 'react-router-dom';

class MenuTeacher extends Component {
    render() {
        return (
            <div id="body">
                <div id="areahead">
                    <p>
                        <Link to="/Teacher/ListStudent"
                            style={{
                                textDecoration: 'none',
                                color: "black",
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}>
                            QUẢN LÝ SINH VIÊN
                        </Link>
                    </p> </div>
                <div id="area" >
                    <p>
                        <Link to="/Teacher/AddClass"
                            style={{
                                textDecoration: 'none',
                                color: "black",
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}>
                            QUẢN LÝ MÔN THI
                            </Link>
                    </p>
                </div >
            </div >

        );
    }
}
export default MenuTeacher;
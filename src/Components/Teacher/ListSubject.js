import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListClass.css'
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
class ListSubject extends Component {

    constructor() {
        super();
        this.state = {
            courseInfor: [
                { className: 'Tin học cơ sở 4', Time: "7h30", Date: "2/1/2020", Slot: "0/50", Room:'3-G3' },
                { className: 'Tin học cơ sở 4', Time: "7h30", Date: "1/1/2020", Slot: "5/50",Room:'301-GD2' },
            ]
        }
    }
    renderClass() {
        return (
            <div id="frame">
                {this.state.courseInfor.map(course => {
                    return (
                        <Link to="/Teacher/ListSubject/ListStudent" style={{ textDecoration: 'none' }}>
                            <div id="frameSubject">
                                <div style={{ fontSize: 24, }}>
                                    <p>{course.className}</p>
                                </div>
                                <div style={{ fontSize: 16, marginLeft: 15 }}>
                                    Số lượng máy: {course.Slot}<br/>
                                    Phòng: {course.Room}
                                </div>
                                <div style={{fontSize: 16, float:'right', marginRight:20, marginTop: -50, fontWeight:600}}>
                                    Thời gian: {course.Time}<br/>
                                    Ngày: {course.Date}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <>
                <HeaderElement></HeaderElement>
                <MenuTeacher></MenuTeacher>
                <div id="listsubject"
                    style={{ marginLeft: "230px", position: "fixed", top: "115px" }}
                >
                    {this.renderClass()}
                </div>
            </>
        );
    }
}

export default ListSubject    
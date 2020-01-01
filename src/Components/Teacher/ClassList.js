import React, { useState, useEffect, Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import { URL_GET_ALLCOURSES } from '../../Config/Api';
import { Button } from 'reactstrap';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ClassList extends Component {
    constructor() {
        super()
        this.state = {
            modalIsOpenAdd: false,
            modalIsOpenDel: false,
            courseInfor: [],
            setCourseInfor: [],
            
        }
        this.openModalAdd = this.openModalAdd.bind(this);
        this.closeModalAdd = this.closeModalAdd.bind(this);
        this.openModalDel = this.openModalDel.bind(this);
        this.closeModalDel = this.closeModalDel.bind(this);
    }
    componentDidMount() {
        Axios.get(URL_GET_ALLCOURSES).then(rs => {
            // console.log(rs.data);
            // setCourseInfor(rs.data)
            this.setState({ courseInfor: rs.data })
        })
    }

    renderButton() {
        return (
            <>
                <Button
                    style={{
                        textDecoration: 'none', color: 'white',
                        width: 150,
                        backgroundColor: 'brown',
                        marginTop: 0,
                        marginLeft: 30,
                        position: "fixed",
                    }}
                    onClick={this.openModalAdd}
                >
                    Thêm môn
        </Button>
                <Button
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                        backgroundColor: 'brown',
                        marginTop: 0,
                        marginLeft: 400,
                        position: "fixed"

                    }}
                    onClick={this.openModalDel}
                >
                    Xóa môn
        </Button>
            </>
        )
    }

    Add = () => {
        { this.closeModalAdd() }
    }
    openModalAdd() {
        this.setState({ modalIsOpenAdd: true });
    }

    closeModalAdd() {
        this.setState({ modalIsOpenAdd: false });
    }
    renderModalAdd() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpenAdd}
                    onRequestClose={this.closeModalAdd}
                    style={customStyles}
                >
                    <div>
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Thêm sinh viên </h2>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class">
                            Mã sinh viên: </label>
                        <input type="text" name="class"
                            style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div style={{ clear: 'both' }}></div>
                    <button
                        style={{ marginTop: 20, marginLeft: 120 }}
                        onClick={() => { this.Add() }}
                    >
                        Thêm
                    </button>
                </Modal>
            </div>
        );
    }

    Del = () => {
        { this.closeModalDel() }
    }

    openModalDel() {
        this.setState({ modalIsOpenDel: true });
    }

    closeModalDel() {
        this.setState({ modalIsOpenDel: false });
    }
    renderModalDel() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpenDel}
                    onRequestClose={this.closeModalDel}
                    style={customStyles}
                >
                    <div>
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Xóa sinh viên </h2>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class">
                            Mã sinh viên: </label>
                        <input type="text" name="class"
                            style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <button
                        style={{ marginTop: 20, marginLeft: 120 }}
                        onClick={() => { this.Del() }}
                    >
                        Xóa
                    </button>
                </Modal>
            </div>
        );
    }

    renderClass() {
        return (
            <div style={{ marginTop: 50, zIndex: "-1" }}>

                <div id="frame" style={{ marginTop: 50 }}>

                    {this.state.courseInfor.map(course => {
                        const url = `/Teacher/StudentOfSubject/${course.courseID}/${course.courseChar}`;

                        return (

                            <Link to={url} style={{ textDecoration: 'none' }}>

                                <div id="frameSubject">
                                    <p>
                                        {course.courseName}
                                    </p>
                                    <p style={{ float: 'left', fontSize: 16 }}>
                                        Mã môn học: {course.courseChar}
                                    </p>
                                    <p style={{ float: "right", marginRight: 10, fontSize: 16, }}>
                                        Lớp số: {course.courseID}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <HeaderElement />
                <div style={{ float: 'left' }}>
                    <MenuTeacher />
                </div>
                <div style={{ position: "fixed", top: "20vh", left: "18vw", height: "5vh", zIndex: "1", width: "80vw", backgroundColor: "white" }}>
                    {this.renderButton()}
                </div>
                <div style={{ float: 'right', marginTop: '20vh', zIndex: '-1' }}>

                    {this.renderClass()}
                </div>
                {this.renderModalAdd()}
                {this.renderModalDel()}
            </div >
        )
    }

}


export default ClassList

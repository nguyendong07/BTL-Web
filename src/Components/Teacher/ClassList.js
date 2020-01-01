import React, { useState, useEffect, Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import { URL_GET_ALLCOURSES,URL_ADD_COURSES } from '../../Config/Api';
import { Label,Input, Button } from 'reactstrap';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width : "30vw", 
        backgroundColor : "white",
        top: '60%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex:'3',
        position : 'relative'
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
            courseID: '',
            courseName: '',
            courseChar: '',
        }
        this.openModalAdd = this.openModalAdd.bind(this);
        this.closeModalAdd = this.closeModalAdd.bind(this);
        this.openModalDel = this.openModalDel.bind(this);
        this.closeModalDel = this.closeModalDel.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.getAllCourses=this.getAllCourses.bind(this);

    }
    componentDidMount() {
       this.getAllCourses();
    }
    getAllCourses(){
        Axios.get(URL_GET_ALLCOURSES).then(rs => {
            // console.log(rs.data);
            // setCourseInfor(rs.data)
            this.setState({ courseInfor: rs.data })
        })
    }
    handleChange(e) {
        // e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
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
                        zIndex:'1'
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
                        position: "fixed",
                        zIndex:'1'
                    }}
                    onClick={this.openModalDel}
                >
                    Xóa môn
        </Button>
            </>
        )
    }

    Add = () => {
        //console.log(this.state);
        const formData = new FormData();
        formData.append('courseID', this.state.courseID);
        formData.append('courseName', this.state.courseName);
        formData.append('courseChar', this.state.courseChar);
        formData.append('token', localStorage.getItem('token'));
        Axios.post(URL_ADD_COURSES, formData).then(rs => {
            console.log(rs.data )
            this.getAllCourses();
             this.closeModalAdd();
        })
       // { this.closeModalAdd() }
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
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Thêm môn thi </h2>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <Label htmlFor="courseName">
                            Môn thi: </Label>
                        <Input type="text"
                            name="courseName"
                            onChange={this.handleChange} 
                            style={{ float: 'right', marginLeft: 10 }}
                            />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <Label htmlFor="courseChar">
                            Mã môn: </Label>
                        <Input type="text"
                            name="courseChar"
                            onChange={this.handleChange} 
                            style={{ float: 'right', marginLeft: 10 }}
                            />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <Label htmlFor="courseID">
                            Lớp số: </Label>
                        <Input type="text"
                            name="courseID"
                            onChange={this.handleChange} 
                            style={{ float: 'right', marginLeft: 10 }}
                            />
                    </div>
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
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Xóa môn thi </h2>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <Label htmlFor="courseName">
                            Môn thi: </Label>
                        <Input type="text"
                            name="courseName"
                            onChange={this.handleChange} 
                            style={{ float: 'right', marginLeft: 10 }}
                            />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <Label htmlFor="courseID">
                            Lớp số: </Label>
                        <Input type="text"
                            name="courseID"
                            onChange={this.handleChange} 
                            style={{ float: 'right', marginLeft: 10 }}
                            />
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
                <div style = {{zIndex : "888", backgroundColor : 'white'    }}>
                {this.renderModalAdd()}
                {this.renderModalDel()}
                </div>
            </div >
        )
    }

}


export default ClassList

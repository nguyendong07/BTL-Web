import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import { Label, Input, Button } from 'reactstrap';
import Modal from 'react-modal';
import Axios from 'axios';
import { URL_GET_Students_OF_SUBJECT, URL_ADD_STUDENT } from '../../Config/Api';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '2'
    }
};
class AddSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentInfo: [],
            modalIsOpenAdd: false,
            modalIsOpenDel: false,
            studentID: '',
            classStudent: '',
            studentName: '',
        }
        this.openModalAdd = this.openModalAdd.bind(this);
        this.closeModalAdd = this.closeModalAdd.bind(this);
        this.openModalDel = this.openModalDel.bind(this);
        this.closeModalDel = this.closeModalDel.bind(this);
        this.getStudentOfSubject = this.getStudentOfSubject.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }
    componentDidMount() {
        this.getStudentOfSubject();
    }

    handleChange(e) {
        // e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    getStudentOfSubject() {
        const { courseID, courseChar } = this.props.match.params;
        const url = `${URL_GET_Students_OF_SUBJECT}/${courseID}/${courseChar}`;
        Axios.get(url).then(rs => {
            //  console.log(rs.data);
            this.setState({
                studentInfo: rs.data
            })
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
                    Thêm sinh viên
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
                    Xóa sinh viên
        </Button>
            </>
        )
    }

    Add = () => {
        const formData = new FormData();
        formData.append('studentID', this.state.studentID);
        formData.append('classStudent', this.state.classStudent);
        formData.append('studentName', this.state.studentName);
        formData.append('token', localStorage.getItem('token'));
        Axios.post(URL_ADD_STUDENT, formData).then(rs => {
            console.log(rs.data);
            this.getStudentOfSubject();
            this.closeModalAdd();
        })
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
                        <Label htmlFor="studentName">
                            Sinh viên: </Label>
                        <Input type="text"
                            name="studentName"
                            onChange={this.handleChange}
                            style={{ float: 'right', marginLeft: 10 }}
                        />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <Label htmlFor="studentID">
                            Mã sinh viên: </Label>
                        <Input type="text"
                            name="studentID"
                            onChange={this.handleChange}
                            style={{ float: 'right', marginLeft: 10 }}
                        />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <Label htmlFor="classStudent">
                            Lớp số: </Label>
                        <Input type="text"
                            name="classStudent"
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
        if (this.state.studentInfo.studentName !== '' && this.state.studentInfo[0])
            return (
                <div style={{ marginTop: 50 }}>
                    {this.state.studentInfo.map(course => {
                        return (
                            <div id="frameSubject" style={{ textDecoration: 'none' }}>
                                <p>Họ và tên : {course.studentName}</p>
                                <div style={{ fontSize: 16, marginLeft: 15 }}>
                                    MSSV: {course.studentID}<br />
                                    Lớp số: {course.courseID}<br />
                                </div>
                                <div
                                    style={{
                                        fontSize: 16,
                                        float: 'right',
                                        marginRight: 20,
                                        marginTop: -30
                                    }}
                                >
                                    Mã môn học: {course.courseChar}
                                </div>
                                <button
                                    style={{
                                        backgroundColor: 'red',
                                        float: 'right',
                                        marginTop: -80,
                                        borderRadius: 10
                                    }}
                                    
                                >
                                        Xóa sinh viên
                                    </button>
                            </div>

                        )
                    })}
                </div>
            )
        else
            return (
                <div>
                    {this.renderButton()}
                </div>
            )
    }

    render() {
        //console.log(this.props.match.params);
        //console.log(this.state);
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
        );
    }
}

export default AddSubject    
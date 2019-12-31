import React, { Component } from 'react';
import './ListClass.css'
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import { Button } from 'reactstrap';
import Modal from 'react-modal';
import Axios from 'axios';
import {URL_GET_Students_OF_SUBJECT} from '../../Config/Api';
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
class AddSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentInfo:[],
            modalIsOpenAdd: false,
            modalIsOpenDel: false,
        }
        this.openModalAdd = this.openModalAdd.bind(this);
        this.closeModalAdd = this.closeModalAdd.bind(this);
        this.openModalDel = this.openModalDel.bind(this);
        this.closeModalDel = this.closeModalDel.bind(this);
        this.getStudentOfSubject = this.getStudentOfSubject.bind(this);
    }
    componentDidMount(){
        this.getStudentOfSubject();
    }
    getStudentOfSubject(){
        const {courseID,courseChar} = this.props.match.params;
        const url = `${URL_GET_Students_OF_SUBJECT}/${courseID}/${courseChar}`;
        Axios.get(url).then(rs=>{
            console.log(rs.data);
            this.setState({
                studentInfo:rs.data
            })
        })
    }
    renderButton() {
        return (
            <div>
                <Button
                    style={{
                        textDecoration: 'none', color: 'white',
                        width: 180,
                        marginTop: 120,
                        left: 260,
                        position: 'fixed',
                        backgroundColor: 'brown',
                    }}
                    onClick={this.openModalAdd}
                >
                    Thêm ca thi
                </Button>
                <Button id="btn2"
                    style={{ textDecoration: 'none', color: 'white' }}
                    onClick={this.openModalDel}
                >
                    Xóa ca thi
                </Button>
            </div>
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
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Thêm ca thi </h2>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class">
                            Tên lớp: </label>
                        <input type="text" name="class"
                            style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class">
                            Địa điểm: </label>
                        <input type="text" name="class" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class">
                            Thời gian: </label>
                        <input type="text" name="class" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class" style={{ marginBottom: 70 }}>
                            Ngày: </label>
                        <input type="text" name="class" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div style={{ clear: 'both' }}></div>
                    <button style={{ marginTop: 240 }}
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
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Xóa ca thi </h2>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class"

                        >
                            Tên lớp: </label>
                        <input type="text" name="class" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class"
                            style={{ marginBottom: 100 }}
                        >
                            Phòng thi: </label>
                        <input type="text" name="class" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <button style={{ marginTop: 200 }}
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
            <div id="frame">
                {this.state.studentInfo.map(course => {
                    return (

                        <div id="frameSubject" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: 24, }}>
                                <p>{course.className}</p>
                            </div>
                            <div style={{ fontSize: 16, marginLeft: 15 }}>
                                Họ và tên : {course.studentName}<br />
                                MSSV: {course.studentID}
                            </div>
                            <div style={{ fontSize: 16, float: 'right', marginRight: 20, marginTop: -50, fontWeight: 600 }}>
                                courseID: {course.courseID}<br />
                                courseChar: {course.courseChar}
                            </div>
                        </div>

                    )
                })}
            </div>
        )
    }

    render() {
        //console.log(this.props.match.params);
        return (
            <>
                <HeaderElement></HeaderElement>
                <MenuTeacher></MenuTeacher>
                <div id="listsubject"
                    style={{ marginLeft: "230px", position: "fixed", top: "200px" }}
                >
                    {this.renderClass()}
                    {this.renderButton()}
                    {this.renderModalAdd()}
                    {this.renderModalDel()}
                </div>
            </>
        );
    }
}

export default AddSubject    
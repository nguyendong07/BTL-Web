import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import { Button } from 'reactstrap';
import Modal from 'react-modal';
import Axios from 'axios';
import { URL_GET_ALLCOURSES } from '../../Config/Api';
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


class AddClass extends Component {

    constructor() {
        super();
        this.state = {
            courseInfor: [],
            modalIsOpenAdd: false,
            modalIsOpenDel: false,

        }
        this.openModalAdd = this.openModalAdd.bind(this);
        this.closeModalAdd = this.closeModalAdd.bind(this);
        this.openModalDel = this.openModalDel.bind(this);
        this.closeModalDel = this.closeModalDel.bind(this);
    }
    componentDidMount() {
        Axios.get(URL_GET_ALLCOURSES).then(rs => {
            //console.log(rs.data);
            this.setState({
                courseInfor: rs.data
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
                        left: 260,
                        position: 'fixed',
                        backgroundColor: 'brown',
                        marginTop:-50,
                    }}
                    onClick={this.openModalAdd}
                >
                    Thêm lớp
                </Button>
                <Button
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                        width: 180,
                        left: 560,
                        position: 'fixed',
                        backgroundColor: 'brown',
                        marginTop:-50,
                    }}
                    onClick={this.openModalDel}
                >
                    Xóa lớp
                </Button> */}
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
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Thêm lớp </h2>
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
                            Học kỳ: </label>
                        <input type="text" name="class" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <button style={{ marginTop: 200 }}
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
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Xóa lớp </h2>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class">
                            Tên lớp: </label>
                        <input type="text" name="class" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class"
                            style={{ marginBottom: 100 }}
                        >
                            Học kỳ: </label>
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
                {this.state.courseInfor.map(course => {
                    const url = `/Teacher/StudentOfSubject/${course.courseID}/${course.courseChar}`;
                    return (
                        <Link to={url} style={{ textDecoration: 'none' }}>
                            <div id="frameSubject">
                                <p>
                                    {course.courseName}
                                </p>
                                <p style={{ float: "right", marginRight: 10, fontSize: 16, }}>
                                    Học kỳ: {course.schoolYear}
                                </p>
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
                <div
                    style={{ marginLeft: "230px", position: "fixed", top: "200px" }}
                >
                    {/*  {this.renderButton()}
                    {this.renderModalAdd()} */}
                    {this.renderClass()}
                    {/* {this.renderModalDel()} */}
                </div>
            </>
        );
    }
}

export default AddClass 
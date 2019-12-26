import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListClass.css'
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
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
class AddSubject extends Component {
    constructor() {
        super();
        this.state = {
            courseInfor: [
                { className: 'Tin học cơ sở 4', Time: "7h30", Date: "2/1/2020", Slot: "0/50", Room: '3-G3' },
                { className: 'Tin học cơ sở 4', Time: "7h30", Date: "1/1/2020", Slot: "5/50", Room: '301-GD2' },
            ],
            modalIsOpenAdd: false,
            modalIsOpenDel: false,
        }
        this.openModalAdd = this.openModalAdd.bind(this);
        this.closeModalAdd = this.closeModalAdd.bind(this);
        this.openModalDel = this.openModalDel.bind(this);
        this.closeModalDel = this.closeModalDel.bind(this);
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
                {this.state.courseInfor.map(course => {
                    return (

                        <div id="frameSubject" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: 24, }}>
                                <p>{course.className}</p>
                            </div>
                            <div style={{ fontSize: 16, marginLeft: 15 }}>
                                Số lượng máy: {course.Slot}<br />
                                Phòng: {course.Room}
                            </div>
                            <div style={{ fontSize: 16, float: 'right', marginRight: 20, marginTop: -50, fontWeight: 600 }}>
                                Thời gian: {course.Time}<br />
                                Ngày: {course.Date}
                            </div>
                        </div>

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
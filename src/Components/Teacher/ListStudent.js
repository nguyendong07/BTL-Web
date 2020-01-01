import React, { Component } from 'react';
import './ListStudent.css';
import Modal from 'react-modal';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import Axios from 'axios';
import { URL_GET_ALL_STUDENTS } from '../../Config/Api';
import { Button } from 'reactstrap'
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
class ListStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentsInfo: [],
            modalIsOpenAdd: false,
            modalIsOpenDel: false,
        }
        this.openModalAdd = this.openModalAdd.bind(this);
        this.closeModalAdd = this.closeModalAdd.bind(this);
        this.openModalDel = this.openModalDel.bind(this);
        this.closeModalDel = this.closeModalDel.bind(this);
    }
    componentDidMount() {
        Axios.get(URL_GET_ALL_STUDENTS).then(rs => {
            //console.log(rs.data);
            this.setState({
                studentsInfo: rs.data
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
                        zIndex: '1'
                    }}
                    onClick={this.openModalAdd}
                >
                    Thêm sinh viên
        </Button>
            {/* <Button
                style={{
                    textDecoration: 'none',
                    color: 'white',
                    backgroundColor: 'brown',
                    marginTop: 0,
                    marginLeft: 400,
                    position: "fixed",
                    zIndex: '1'
                }}
                onClick={this.openModalDel}
            >
                Xóa sinh viên
            </Button> */}
            </>
        )
    }

    Add = () => {
        { this.closeModalAdd() }
    }

    Del = () => {
        { this.closeModalDel() }
    }

    renderClass() {
        return (
            <div id="frame-liststudent" style={{ marginTop: "10vh" }}>
                {this.state.studentsInfo.map(student => {
                    return (
                        // <div style={{ textDecoration: 'none' }}>
                        <div id="frameStudent">
                            <p>Họ và tên: {student.studentName}<br />
                                Mã sinh viên: {student.studentID}<br />
                            </p>
                        </div>
                        // </div>
                    )
                })}
            </div>
        )
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
                        <label name="class"
                        // style={{ marginRight: 10 }}
                        >
                            Họ và tên: </label>
                        <input type="text" name="class" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="class"
                            style={{ marginBottom: 100 }}
                        >
                            Mã sinh viên: </label>
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
                        <h2 style={{ marginLeft: 50, marginBottom: 50 }}>Xóa sinh viên</h2>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div >
                        <label name="msv" style={{ marginBottom: 100 }}>Mã sinh viên: </label>
                        <input type="text" name="msv" id="msv" style={{ float: 'right', marginLeft: 10 }} />
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <button style={{ marginTop: 150 }}
                        onClick={() => { this.Del() }}
                    >
                        Xóa sinh viên
                    </button>

                </Modal>
            </div>
        );
    }

    render() {
        return (
            <>
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
                    {/* {this.renderModalDel()} */}
                </div >

            </>


        );
    }
}

export default ListStudent    
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListStudent.css';
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
class ListStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseInfor: [
                { name: 'Lê Văn Đức', msv: '17020695', class: 'K62 CB', schoolYear: '2019 - 2020' },
                { name: 'Lê Văn Test', msv: '17020695', class: 'K62 CB', schoolYear: '2019 - 2020' },
            ],
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    renderButton() {
        return (
            <div>
                <Button id="btn1">
                    <Link to="/Teacher/StudentScreen/Add"
                        style={{ textDecoration: 'none', color:'white' }} >
                        Đăng ký thi
                    </Link>
                </Button>
                <Button id="btn2">Cập nhật </Button>
                <Button id="btn3">Xóa</Button>
            </div>
        )
    }
    renderClass() {
        return (
            <div id="frame">
                {this.state.courseInfor.map(course => {
                    return (
                        <Link style={{ textDecoration: 'none' }}>
                            <div id="frameStudent">
                                <p>Họ và tên: {course.name}<br />
                                    Mã sinh viên: {course.msv}<br />
                                    Lớp học: K62 CB
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    renderModal() {
        return (
            <div>
                <button id="btnModal" onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div><h2>Hello</h2></div>
                    <div>I am a modal</div>
                </Modal>
            </div>
        );
    }
    render() {
        return (
            <div
                style={{ marginLeft: "230px", position: "fixed", top: "200px" }}
            >
                {/* {this.renderModal()} */}
                {this.renderButton()}
                {this.renderClass()}
            </div>
        );
    }
}

export default ListStudent    
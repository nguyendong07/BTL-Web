import React, { Component, useState } from 'react';
import computer from './computer.jpg';
import '../Room/Room.css'
import Axios from 'axios';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Room extends Component {
    constructor() {
        super();
        this.state = {
            roomInfor: [],
        }
    }
    componentDidMount() {
        Axios.get('http://192.168.1.105:4000/Information').then(rs => {
            this.setState({ roomInfor: rs.data })
        })
    }
    render() {
        return (
            <div id="container" style={{ height: "200px", width: "180px", borderRadius: "12px", border: "1px solid black" }}        
            >
                <div id="nameroom" style={
                    {
                        textAlign: "center",
                        paddingTop: "6px"
                    }}>Phòng {this.state.roomInfor.Room}</div>
                <div id="image" style={
                    {
                        paddingBottom: "12px",
                        paddingTop: "10px",
                        paddingLeft: "15px"
                    }} >
                    <img height="120px" width="140px" src={computer}></img>
                    
                </div>
                <div id="numbercomputer" style={{ textAlign: "center" }}>
                    <pre style={{ fontFamily: "sans-serif" }}>
                        Số máy : {this.state.roomInfor.Slot}
                    </pre>
                </div>      
            </div>

        );
    }
}

export default Room;
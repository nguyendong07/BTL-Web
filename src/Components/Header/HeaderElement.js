import React, { Component } from 'react';
import './HeaderElement.css';
import Logo_UET from '../Header/Logo_UET.jpg';

export default class extends Component {
    render() {
        return (
            <div id = "container" style = {{backgroundColor: "hsla(0, 100%, 90%, 0.3)", height : "100px", borderRadius : "1px"}} >
                <img src = {Logo_UET} alt = "Logo_UET" height = "90px" style = {{marginLeft : "50px",marginTop : "5px",float : "left",backgroundImage : "red", backgroundColor : "red"}}></img>
                <h1 style = {{textAlign : "center", padding : "20px"}}>Hệ thống đăng kí thi online </h1>
                <div style = {{marginLeft : "25%"}} >
                <marquee width = "95%" direction = "left" >Thông báo : Lịch thi sẽ được cập nhật hằng ngày</marquee>
            </div>  
            </div>
           
        );
    }
}


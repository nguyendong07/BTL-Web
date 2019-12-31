import React, { Component } from 'react';
import '../Header/HeaderElement.css';
import {Button} from 'reactstrap';

export default class extends Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(){
        localStorage.clear();
        window.location.href = "/"
    }
    render() {
        return (
          <nav>
            <div id = "header-container">
                <h1 id = "header-text"  >Hệ thống đăng kí thi online </h1>
                <Button id = "button-logout" color = "success" onClick = {this.handleLogout}>Đăng xuất</Button>
            <div>
                <marquee>Thông báo : Lịch thi sẽ được cập nhật hằng ngày</marquee>
            </div>  
            </div>
            </nav>  
        );
    }
}


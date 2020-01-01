import React, { Component } from 'react';
import '../Menu/Menu.css';
import {Link} from 'react-router-dom';
class Menu extends Component {
    render() {
        return (
            <div id = "body-menu" > 
                  <Link to = "/Information" style = {{textDecoration : 'none'   , color : "black"}}><div id = "areahead1"><p>Thông tin tài khoản</p></div></Link>
                  <Link to = "/Resigter" style = {{textDecoration : 'none', color : "black"}}><div id = "area1"><p>Đăng kí thi</p></div></Link>
                  <Link to = "/resultRegister" style = {{textDecoration : 'none', color : "black"}}><div id = "area1"><p>Kết quả đăng kí</p></div></Link>
                  <Link to = "/Notification" style = {{textDecoration : 'none', color : "black"}}><div id = "area1"><p>Thông báo</p></div></Link> 
            </div>
        );
    }
}
export default Menu; 
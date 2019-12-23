import React, { Component } from 'react';
import '../Menu/Menu.css';
import {Link} from 'react-router-dom';
class Menu extends Component {
    render() {
        return (
            <div id = "body"  > 
                  <div id = "areahead"><p><Link to = "/Information" style = {{textDecoration : 'none', color : "black"}}>Thông tin tài khoản</Link></p></div> 
                  <div id = "area" ><p><Link to = "/Resigter" style = {{textDecoration : 'none',  color : "black"}}>Đăng kí thi</Link></p></div>
                  <div id = "area" ><p><Link to = "/resultRegister" style = {{textDecoration : 'none',  color : "black"}}>Kết quả đăng kí</Link></p></div>
                  <div id = "area" ><p><Link to = "/Notification" style = {{textDecoration : 'none', color : 'black'}}>Thông báo</Link></p></div>
            </div>
        );
    }
}
export default Menu;
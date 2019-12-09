import React, { Component } from 'react';
class Menu extends Component {
    render() {
        return (
            <div id = "body" style = {{backgroundColor : "#f1f1f1", width : "230px", height : "550px", marginTop : "30px", borderRadius : "12px"}}>
                <ul style = {{fontFamily : "Arial, Helvetica, sans-serif", fontSize : "18px"}}>
                <li style = {{paddingTop : "15px", paddingBottom : "15px", listStyle : "none", paddingRight : "10px", borderBottom : "0.1px solid black"}}><a href = "#">Thông tin tài khoản</a></li>
                <li style = {{paddingTop : "15px", paddingBottom : "15px", listStyle : "none", paddingRight : "10px", borderBottom : "0.1px solid black"}}><a href = "#">Đăng kí thi</a></li> 
                <li style = {{paddingTop : "15px", paddingBottom : "15px", listStyle : "none", paddingRight : "10px", borderBottom : "0.1px solid black"}}><a href = "#">Kết quả đăng kí</a></li>   
                <li style = {{paddingTop : "15px", paddingBottom : "20px", listStyle : "none", paddingRight : "10px", borderBottom : "0.1px solid black"}}><a href = "#">Thông báo</a></li> 
                </ul>
            </div>
        );
    }
}

export default Menu;
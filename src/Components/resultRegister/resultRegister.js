import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import HeaderElement from '../Header/HeaderElement';
import  '../resultRegister/resultRegister.css';

class resultRegister extends Component {
    constructor() {
        super();
        this.state = {
            courseName : '',
            class : ''
        }
    }
    componentDidMount() {
        this.setState.courseName = 'b';
    }
    render() {
        return (
            <div>
              <HeaderElement></HeaderElement>
            <div className =  "flex-container1"> 
              <div style = {{float : 'left', flex : '1'}}> <Menu></Menu> </div>
              <div id = "result-register"> 
                  <h3>Kết quả đăng kí môn học</h3>
              </div>
            </div>
            </div>
        );
    }
}
export default resultRegister;
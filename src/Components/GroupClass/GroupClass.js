import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Container} from 'reactstrap';
import Room from '../Room/Room';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
class GroupClass extends Component {
    render() {
        return (
           <div>
            <HeaderElement></HeaderElement>
            <div>
             <Menu></Menu>   
             <Room></Room>
            </div>
           
            </div>    
        );
    }
}

export default GroupClass;
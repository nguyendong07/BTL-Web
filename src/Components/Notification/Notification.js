import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu'
class Notification extends Component {
    render() {
        return (
            <div>
                <HeaderElement></HeaderElement>
                <Menu></Menu>   
            </div>
        );
    }
}

export default Notification;
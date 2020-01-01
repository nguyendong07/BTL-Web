import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import ListSubject from '../ListSubject/ListSubject';

class Resigter extends Component {
    render() {
        return (
            <div >
                <HeaderElement></HeaderElement>
                <div style={{ float: 'left' }}>
                    <Menu />
                </div>
                <ListSubject />
            </div>

        );
    }
}
export default Resigter; 
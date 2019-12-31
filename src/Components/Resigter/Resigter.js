import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import ListSubject from '../ListSubject/ListSubject';

class Resigter extends Component {
    render() {
        return (
            <div >
               <HeaderElement></HeaderElement>
            <div>
                <Menu></Menu>
                <ListSubject></ListSubject>
            </div>
            </div>
        );
    }
}
export default Resigter; 
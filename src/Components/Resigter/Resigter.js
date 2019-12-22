import React, { Component } from 'react';
import GroupClass from '../GroupClass/GroupClass';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import {Row, Col} from 'reactstrap';
import ListSubject from '../ListSubject/ListSubject';

class Resigter extends Component {
    render() {
        return (
            <div>
               <HeaderElement></HeaderElement>
             <Row>
                <Col sm = "2"> <Menu></Menu></Col> 
                <Col sm = "11"> <ListSubject></ListSubject></Col>   
             </Row>  
            </div>
        );
    }
}
export default Resigter; 
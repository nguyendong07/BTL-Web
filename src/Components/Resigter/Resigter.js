import React, { Component } from 'react';
import GroupClass from '../GroupClass/GroupClass';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import {Row, Col} from 'reactstrap';

class Resigter extends Component {
    render() {
        return (
            <div>
               <HeaderElement></HeaderElement>
             <Row>
                <Col sm = "1"> <Menu></Menu></Col> 
                <Col sm = "11">  <GroupClass></GroupClass></Col>   
             </Row>  
              
             
            </div>
        );
    }
}


export default Resigter; 
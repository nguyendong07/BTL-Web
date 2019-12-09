import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import {Row, Col} from 'reactstrap';

class Information extends Component {
    render() {
        return (
            <div>
                <HeaderElement></HeaderElement>
                 <Row>
                     <Col sm = "1"><HeaderElement></HeaderElement></Col>
                     <Col sm = "11"></Col>
                 </Row>
                    
            </div>
        );
    }
}

export default Information;
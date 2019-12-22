import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import {Row, Col} from 'reactstrap';
import FrameInformation from '../FrameInformation/FrameInformation';

class Information extends Component {
    render() {
        return (
            <div>
                <HeaderElement></HeaderElement>
                 <Row>
                     <Col sm = "2"><Menu></Menu></Col>
                     <Col sm = "10"><FrameInformation></FrameInformation></Col>
                 </Row>
                    
            </div>
        );
    }
}

export default Information;
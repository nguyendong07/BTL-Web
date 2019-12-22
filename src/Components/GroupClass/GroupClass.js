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
            <Row>
                <Col sm = "1"><Menu></Menu></Col>
                <Col sm = "11">
                <div style = {{marginTop : "50px", marginLeft : "180px"}}>
                <Container>
                    <Row>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                    </Row>
                    <div style = {{height : "30px"}}></div> 
                    <Row>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                    </Row>
                </Container>
            </div></Col>
            </Row>
            
            </div>    
        );
    }
}

export default GroupClass;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Container} from 'reactstrap';
import Room from '../Room/Room';
class GroupClass extends Component {
    render() {
        return (
            <div style = {{marginTop : "50px", marginLeft : "200px"}}>
                <Container>
                    <Row>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                    </Row>
                    <div style = {{height : "30px"}}></div> 
                    <Row>
                        <Col xs = "3"><Room></Room></Col>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                        <Col><Room></Room></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GroupClass;
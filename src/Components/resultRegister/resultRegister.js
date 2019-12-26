import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import HeaderElement from '../Header/HeaderElement';
import  '../resultRegister/resultRegister.css';
import  {Col, Row} from 'reactstrap';
class resultRegister extends Component {
    constructor() {
        super();
        this.state = {
            courseName : '',
            class : ''
        }
    }

    componentDidMount() {
        this.setState.courseName = 'b';
    }

    render() {
        return (
            <div>
            <HeaderElement></HeaderElement>
            <Row>
                <Col sm = "2"> <Menu></Menu></Col> 
                <Col sm = "10">
                    <div id = "listSubjectRegisted">
                        <h2>Danh sách phòng thi đã đăng ký</h2>
                    </div>

                </Col>   
            </Row>     
            </div>
        );
    }
}

export default resultRegister;
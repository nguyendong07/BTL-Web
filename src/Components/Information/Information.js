import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import FrameInformation from '../FrameInformation/FrameInformation';

class Information extends Component {
    render() {
        return (
            <div style = {{width : "100vw", height : "100vh"}}>
                <HeaderElement></HeaderElement>
                <div >
                    <Menu></Menu>
                    <FrameInformation></FrameInformation>
                </div>    
                    
            </div>
        );
    }
}

export default Information;
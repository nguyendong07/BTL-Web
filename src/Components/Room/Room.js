import React, { Component } from 'react';
import computer from './computer.jpg'
class Room extends Component {
    render() {
        return (
            <div id = "container" style = {{height : "200px", width : "180px", borderRadius : "12px", border : "1px solid black"}}>
                <div id = "nameroom" style  = {{textAlign : "center" ,paddingTop : "6px"}}>P301-G2</div>
                <div id = "image" style = {{paddingBottom : "17px", paddingTop : "10px", paddingLeft :"15px"}} ><img height = "120px" width = "140px" src = {computer}></img> </div>
                <div id = "numbercomputer" style = {{textAlign : "center"}}>
                    <p>
                        Số máy : 30/50
                    </p>
                </div>
            </div>
        );
    }
}

export default Room;
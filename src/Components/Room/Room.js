import React, { Component } from 'react';
import computer from './computer.jpg';
import Axios from 'axios';
class Room extends Component {
    constructor(){
        super();
        this.state = {
            roomInfor : []
        }
   }
   componentDidMount(){
       Axios.get('http://192.168.1.105:4000/Information').then(rs=>{
         this.setState({roomInfor : rs.data}) 
       })
   }
    render() {
        return (
            <div id = "container" style = {{height : "200px", width : "180px", borderRadius : "12px", border : "1px solid black"}}>
    <div id = "nameroom" style  = {{textAlign : "center" ,paddingTop : "6px"}}>Phong {this.state.roomInfor.Room}</div>
                <div id = "image" style = {{paddingBottom : "12px", paddingTop : "10px", paddingLeft :"15px"}} ><img height = "120px" width = "140px" src = {computer}></img> </div>
                <div id = "numbercomputer" style = {{textAlign : "center"}}>
                    <pre style = {{fontFamily : "sans-serif"}}>
                        Số máy : {this.state.roomInfor.Slot}
                    </pre>
                </div>
            </div>
        );
    }
}

export default Room;
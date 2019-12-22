import React, { Component } from 'react';
import Axios from 'axios';
class Test extends Component {
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
        console.log(this.state.roomInfor)
        return (
            <div>
                   <p>Phong {this.state.roomInfor.Room}</p>
            </div>
        );
    }
}

export default Test;
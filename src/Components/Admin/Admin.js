import React, { Component } from 'react';
import HeaderElement from '../Header/HeaderElement';
class Admin extends Component {
    constructor(){
        super();
        this.state={
            isLoged:localStorage.getItem('isLoged')
        }
    }
     
    render() {
        console.log(this.state.isLoged);
        if(this.state.isLoged==='true'){
            return (
                <div>
                    <HeaderElement />
                </div>
            );
        }
        return(<div>
            
        </div>)
    }
}

export default Admin;
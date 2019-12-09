import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import ListSubject from '../ListSubject/ListSubject';

class Admin extends Component {
    constructor(){
        super();
        this.state={
            isLoged:localStorage.getItem('isLoged')
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
     handleLogout(){
         localStorage.clear();
         this.setState({isLoged : "false"})
     }
    render() {
        if(this.state.isLoged==="true"){
            return (
                <div>       
                    <HeaderElement></HeaderElement>
                     <Menu></Menu> 
                     <Button style = {{ position : "fixed", top : "30px", right: "20px"}} color = "success" onClick = {this.handleLogout}>Đăng xuất</Button> 
                     <ListSubject></ListSubject>           
                </div>
            );
        }
        else if (this.state.isLoged==="false") {
           return <Redirect to = "/"></Redirect>
        }
    }
}
export default Admin;
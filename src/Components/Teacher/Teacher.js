import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import ListSubject from '../ListSubject/ListSubject';
class Teacher extends Component {
    constructor(){
        super();
        this.state={
            isLoged:localStorage.getItem('isLoged')
        }
    }
    render() {
        if(this.state.isLoged==="true"){
            return (
                <div>       
                    <HeaderElement></HeaderElement>
                     <MenuTeacher></MenuTeacher> 
                     <ListSubject></ListSubject>           
                </div>
            );
        }
        else if (this.state.isLoged==="false") {
           return <Redirect to = "/"></Redirect>
        }
    }
}
export default Teacher;
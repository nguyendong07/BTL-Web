import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import ListClass from './ListClass';

class Teacher extends Component {
    constructor(){
        super();
        this.state={
            isLoged:localStorage.getItem('userName') !== null && localStorage.getItem('userName') ==='admin'
        }
    }
    render() {
        if(this.state.isLoged===true){
            return (
                <div>       
                    <HeaderElement></HeaderElement>
                     <MenuTeacher></MenuTeacher>
                     <div>
                         <h1>
                             Hướng dẫn quản lý sinh viên 
                         </h1>
                     </div> 
                </div>
            );
        }
        else if (this.state.isLoged===false) {
           return <Redirect to = "/"></Redirect>
        }
    }
}
export default Teacher;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';
import ListClass from './ListClass';

class StudentScreen extends Component {
    render() {
            return (
                <div>
                    <HeaderElement></HeaderElement>
                    <MenuTeacher></MenuTeacher>
                </div>
            );
        }
}
export default StudentScreen;
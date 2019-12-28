import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderElement from '../Header/HeaderElement';
import MenuTeacher from '../MenuTeacher/MenuTeacher';

class SubjectSreen extends Component {
    render() {
            return (
                <div>
                    <HeaderElement></HeaderElement>
                    <MenuTeacher></MenuTeacher>
                </div>
            );
        }
}
export default SubjectSreen;
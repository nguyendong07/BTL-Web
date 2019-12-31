import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import HeaderElement from '../Header/HeaderElement'
import Menu from '../Menu/Menu'
import ListSubject from '../ListSubject/ListSubject'
class Student extends Component {
    constructor() {
        super()
        this.state = {
            isLoged: localStorage.getItem('userName') !== null && localStorage.getItem('userName') !=='Student'
        }
    }

    render() {
        if (this.state.isLoged === true) {
            return (
                <div style={{ width: "100vw", height: "100vh" }}>
                    <HeaderElement></HeaderElement>
                    <Menu></Menu>
                    <ListSubject></ListSubject>
                </div>
            );
        }
        else if (this.state.isLoged === false) {
            return <Redirect to="/"></Redirect>
        }
        return <div>aaaaaaaaa</div>
    }
}
export default Student;
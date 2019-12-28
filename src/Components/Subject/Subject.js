import React, { Component } from 'react'
import axios from 'axios'
import '../Subject/Subject.css'
import { Link } from 'react-router-dom'

class Subject extends Component {

    constructor() {
        super()
        this.state = {
            courseInfor: []
        }
    }

    componentDidMount() {
        const host = 'http://192.168.1.105:4000/'
        let getToken = localStorage.getItem('token')
        
        axios.get(host + 'student/subject', {
            headers: {
                Authorization: 'Bearer ' + getToken
            }
        })
            .then((res) => {
                this.setState({ courseInfor: res.data })
            })
    } 

    render() {
        return (
            <div id="frame">
                {this.state.courseInfor.map(course => {
                    return (
                        <div id="frameSubject">
                            <p><Link to={'/GroupClass'} subName={course.tenmonthi}>{course.tenmonthi}</Link></p>
                            <pre style={{ float: "right", marginRight: "20px" }}>Năm học : 2019-2020</pre>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Subject
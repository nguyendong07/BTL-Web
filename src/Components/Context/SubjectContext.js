import React, { Component } from 'react';
import axios from 'axios';
export const SubjectContext = React.createContext();
export class SubjectProvider extends Component {
  constructor() {
    super();
    this.state = {
      courseInfor: []
    }
    this.getSubject = this.getSubject.bind(this)
  }
  componentDidMount() {
    this.getSubject()
  }
  getSubject() {
    const host = 'http://192.168.1.103:4000/'
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
      <SubjectContext.Provider value={{ courseInfor: this.state.courseInfor, getSubject: this.getSubject }}>
        {this.props.children}
      </SubjectContext.Provider>
    )
  }
}
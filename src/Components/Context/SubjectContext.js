import React, {Component } from 'react';
import axios from 'axios';
import {URL_GET_SUBJECT} from '../../Config/Api';
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
    const studentID = localStorage.getItem('userName');
    const url = `${URL_GET_SUBJECT}/${studentID}`;
    let getToken = localStorage.getItem('token')
    axios.get(url, {
      headers: { 
        Authorization: 'Bearer ' + getToken
      }
    })
    .then((res) => {
        //console.log(res.data);
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
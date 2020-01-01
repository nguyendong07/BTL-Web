import React, { Component } from 'react'
import { Label, FormGroup, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import {URL_LOGIN} from '../../Config/Api'
import './LoginForm.css'
import axios from 'axios'
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLoged: localStorage.getItem('token')!==null,
      code: '0'
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    // e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }
  handleLogin() {
    const host = URL_LOGIN;

    axios.post(host, {
      userName: this.state.username,
      passWord: this.state.password
    }) 
      .then((res) => {
        //console.log(res)
        if (res.statusText === 'OK') {
          localStorage.setItem('userName', res.data.userName)
          localStorage.setItem('token', res.data.token)
          this.setState({
            isLoged: localStorage.getItem('token')!=='',
            userName: localStorage.getItem('userName')
          })
        }
      })
  }

  render() {
   // console.log(this.state.isLoged)
    if (this.state.isLoged === true && localStorage.getItem('userName') !== 'admin') {
      return <Redirect to='/Student'></Redirect>
    }
    else if (this.state.isLoged === true && localStorage.getItem('userName') ==='admin') {
      return <Redirect to='/Teacher'> </Redirect>
    }
    else {
      return (
        <div className="Body" >
          <Label id = "frame-label">
            <FormGroup>
              <Label for="exampleEmail" id = "frame-user">Tài khoản</Label>
              <Input type="email" 
                     name="username" 
                     id="exampleEmail" 
                     placeholder="Email" 
                     onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label id = "frame-password" for="examplePassword">Mật khẩu</Label>
              <Input type="password" 
                     name="password" 
                     id="examplePassword" 
                     placeholder="Password" 
                     onChange={this.handleChange} />
            </FormGroup>
            <Button id = "button-login"  color="success" size="sm" onClick={this.handleLogin}>Đăng nhập</Button>{' '}
          </Label>
        </div>
      )
    }
  }
}

export default LoginForm
import React, { Component } from 'react'
import { Label, FormGroup, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import './LoginForm.css'
import axios from 'axios'
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLoged: false,
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
    const host = 'http://192.168.1.103:4000/'

    axios.post(host, {
      userName: this.state.username,
      passWord: this.state.password
    }) 
      .then((res) => {
        if (res.statusText === 'OK') {
          localStorage.setItem('userName', res.data.userName)
          localStorage.setItem('token', res.data.token)
          this.setState({
            isLoged: true,
            userName: localStorage.getItem('userName')
          })
        }
      })
  }

  render() {
    if (this.state.isLoged === true && this.state.userName !== 'admin') {
      return <Redirect to='/Admin'></Redirect>
    }
    else if (this.state.isLoged === true && this.state.userName ==='admin') {
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
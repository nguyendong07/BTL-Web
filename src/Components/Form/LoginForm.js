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
    const host = 'http://localhost:4000/'

    axios.post(host, {
      userName: this.state.username,
      passWord: this.state.password
    }) 
      .then((res) => {
        if (res.statusText === 'OK') {
          localStorage.setItem('isLoged', 'true')
          localStorage.setItem('token', res.data)
          this.setState({
            isLoged: true
          })
        }
      })
  }


  render() {
    if (this.state.isLoged === true && this.state.code === '0') {
      return <Redirect to='/Admin'></Redirect>
    }
    else if (this.state.isLoged === true && this.state.code === '1') {
      return <Redirect to='/Teacher'> </Redirect>
    }
    else {
      return (
        <div className="Body" style={{ backgroundColor: "#e6ffff", width: "100%", height: "100vh" }}>
          <Label style={
            {
              backgroundColor: "white",
              border: "1px solid gray",
              width: "40%",
              marginTop: "10%",
              padding: "20px",
              position: "fixed",
              marginLeft: "30%",
              borderRadius: "16px"
            }
          }>
            <FormGroup>
              <Label for="exampleEmail" style={
                {
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "20px",
                  float: "left",
                  marginTop: "5px"
                }}>Tài khoản
        </Label>
              <Input type="email" name="username" id="exampleEmail" placeholder="Email" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label style={
                {
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "20px", float: "left"
                }}
                for="examplePassword">Mật khẩu
        </Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleChange} />
            </FormGroup>
            <Button style={{ position: "fixed", right: "42%", top: "60%", width: "200px" }} color="success" size="sm" onClick={this.handleLogin}>Đăng nhập</Button>{' '}
          </Label>

        </div>
      )
    }
  }
}


export default LoginForm
import React, { Component } from 'react';
import {Label, FormGroup, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
class LoginForm extends Component {   
   constructor() {
       super();
       this.state = {
           username : '',
           password :'',
           isLoged : false
       }
       this.FormLogin = this.FormLogin.bind(this);
       this.HandleChange = this.HandleChange.bind(this);
    }
    HandleChange(e){
        // e.preventDefault();
        this.setState({[e.target.name] : e.target.value});
    }
    FormLogin () {
      if (this.state.username === 'admin' && this.state.password ==='123') {
        localStorage.setItem('isLoged','true');
        this.setState({
            isLoged : true
        })
      }
    }
    render() {
        if (this.state.isLoged === true) {
          return  <Redirect to = '/Admin'></Redirect>
        }
        return (
<div id = "form">
    <Label style = {{border: "1px solid gray", width : "40%", marginTop : "10%" }}>
      <FormGroup>
        <Label for="exampleEmail" style = {{fontFamily : "Arial, Helvetica, sans-serif", fontSize : "20px", float :"left", marginTop : "5px    "}}>Tài khoản</Label>
        <Input type="email" name="username" id="exampleEmail" placeholder="email" onChange = {this.HandleChange} />
      </FormGroup>
      <FormGroup>
        <Label 
            style = {{fontFamily : "Arial, Helvetica, sans-serif", fontSize : "20px",float :"left"}}for="examplePassword">Mật khẩu</Label>
        <Input  type="password" name="password" id="examplePassword" placeholder="password" onChange = {this.HandleChange} />
      </FormGroup>
      <Button style = {{marginBottom : "20px",width : "200px",height : "40px"}} color="success" size="sm" onClick = {this.FormLogin}>Đăng nhập</Button>{' '}
      </Label>
</div>
        );
    }
}

export default LoginForm;
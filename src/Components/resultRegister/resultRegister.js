import React, { useContext } from 'react';
import Menu from '../Menu/Menu';
import HeaderElement from '../Header/HeaderElement';
import  '../resultRegister/resultRegister.css';
import {RegisterContext} from '../Context/RegisterContext';
export default function(){
    const {register} = useContext(RegisterContext);
    console.log(register)
    return (<div>
          <HeaderElement></HeaderElement>
        <div className =  "flex-container1"> 
          <div style = {{float : 'left', flex : '1'}}> <Menu></Menu> </div>
          <div id = "result-register"> 
              <h3>Kết quả đăng kí môn học</h3>
          </div>
        </div>
    </div>
    );
}
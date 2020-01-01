import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {URL_GET_REGISTER_BY_STUDENTID} from '../../Config/Api';
export const RegisterContext = React.createContext();
export function RegisterProvider(props){  
  const [register,setRegister] = useState([]);
  useEffect(()=>{
    getRegisterByStudentID();
  },[])
  function getRegisterByStudentID(){   
      const studentID = localStorage.getItem('userName');     
      const url = `${URL_GET_REGISTER_BY_STUDENTID}/${studentID}`;
      Axios.get(url).then(rs=>{
        setRegister(rs.data);
      })
    
    
  }
  return(
    <RegisterContext.Provider value={{register,getRegister:getRegisterByStudentID}}>
      {props.children}
    </RegisterContext.Provider>
  )
} 
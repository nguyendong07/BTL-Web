import React, { useState, useEffect } from 'react';
import  {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Room from '../Room/Room';
import HeaderElement from '../Header/HeaderElement';
import Menu from '../Menu/Menu';
import Axios from 'axios';
import {URL_GET_ROOM_INFO} from '../../Config/Api';
export default function (){
    const [roomInfo,setRoomInfo] = useState([]);
    const {courseChar} = useParams();
    const url = `${URL_GET_ROOM_INFO}/${courseChar}`;
    useEffect(()=>{
        Axios.get(url).then(rs=>{
            setRoomInfo(rs.data)
        })
    },[]);
        //console.log(roomInfo)
        return (
        <div>
         <HeaderElement></HeaderElement>
         <div>
          <Menu></Menu>   
          <Room roomInfo={roomInfo}></Room>
         </div>
        
         </div>    
     );
}
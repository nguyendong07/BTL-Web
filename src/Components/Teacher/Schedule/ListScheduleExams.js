import React, { useState, useEffect } from 'react';
import HeaderElement from '../../Header/HeaderElement';
import MenuTeacher from '../../MenuTeacher/MenuTeacher';
import './ListScheduleExams.css';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import Axios from 'axios';
import { URL_GET_SCHEDULE, URL_CREATE_SCHEDULE } from '../../../Config/Api';
export default function () {
  const [schedule, setSchedule] = useState([])

  const [modal, setModal] = useState(false)
  const [scheduleID, setScheduleID] = useState([])
  const [schoolYear, setSchoolYear] = useState([])
  const toggle = () => setModal(!modal) 

  function createSchedule() {
    const url = `${URL_CREATE_SCHEDULE}`
    Axios.post(url, {
      scheduleID: scheduleID,
      schoolYear: schoolYear, 
      token: localStorage.getItem('token')
    }).then(rs => {
      console.log(rs)
    })
    toggle()
  }

  useEffect(() => {
    getSchedule();
  }, [])

  function getSchedule() {
    Axios.get(URL_GET_SCHEDULE).then(rs => {
      setSchedule(rs.data);
    })
  }

  return (
    <React.Fragment>
      <HeaderElement></HeaderElement>
      <div id="container-listschedule" 
      style={{ float: "left"}}>
        <MenuTeacher></MenuTeacher>
        </div>
        <div id="frame-listschedule"
          style={{ float:'right',marginTop:"20vh" }}
        >
          <Button id="bAdd" style={{ marginLeft: '30px' }} onClick={toggle}>
          Thêm ca thi
          </Button>
          {schedule.map(item => {
            const url = `/Teacher/Schedule/${item.scheduleID}`
            return (
              // <div style={{ textDecoration: 'none' }}>
              <Link to={url} style={{ textDecoration: 'none' }} >
                <div id="frameSchedule" >
                  <p > Kì thi: {item.scheduleID}<br />
                    Năm học: {item.schoolYear}<br />
                  </p>
                </div>
              </Link>
              // </div>
            )
          })}

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Thêm ca thi</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Mã kỳ thi</Label>
                <Input placeholder="1, 2, 3..." onChange={(e => {setScheduleID(e.target.value)})}></Input>
              </FormGroup>
              <FormGroup>
                <Label for="schoolYear">Năm học</Label>
                <select value={schoolYear} onChange={e=> {setSchoolYear(e.target.value)
                
                }}>
                  <option value='2019-2020'>2019-2020</option>
                  <option value='2020-2021'>2020-2021</option>
                </select>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={createSchedule}>Đồng ý</Button>{' '}
          </ModalFooter>
        </Modal>
        </div>
    </React.Fragment>
  )
}
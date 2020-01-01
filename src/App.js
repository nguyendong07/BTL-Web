import React from 'react'
import LoginForm from './Components/Form/LoginForm'
import { BrowserRouter as Brt, Route, Switch } from 'react-router-dom'
import Student from './Components/Student/Student'
import Resigter from './Components/Resigter/Resigter'
import Information from './Components/Information/Information'
import resultRegister from './Components/resultRegister/resultRegister'
import GroupClass from './Components/GroupClass/GroupClass'
import Notification from './Components/Notification/Notification'
import Teacher from './Components/Teacher/Teacher'
import SubjectScreen from './Components/Teacher/SubjectScreen'
import ListStudent from './Components/Teacher/ListStudent'
import ListSubject from './Components/Teacher/ListSubject'
import AddClass from './Components/Teacher/AddClass'
import StudentsOfSubject from './Components/Teacher/StudentOfSubject';
import ListScheduleExams from './Components/Teacher/Schedule/ListScheduleExams';
import { SubjectProvider } from './Components/Context/SubjectContext';
import {RegisterProvider} from './Components/Context/RegisterContext';
import ExamsOfSchedule from './Components/Teacher/ExamsOfSchedule/ExamsOfSchedule'
function App() {
  return <Brt>
      <Switch>
        <Route exact path="/" component={LoginForm}></Route>
    <SubjectProvider>
        <Route exact path="/Student" component={Student} />
        <Route exact path="/Information" component={Information} />
          <Route exact path="/Resigter" component={Resigter} />
          <Route exact path="/resultRegister" component={resultRegister}></Route>
          <Route exact path="/GroupClass/:courseChar" component={GroupClass}></Route>
        <Route exact path="/Notification" component={Notification}></Route>
        <Route exact path="/Teacher" component={Teacher}></Route>
        <Route exact path="/Teacher/SubjectScreen" component={SubjectScreen}></Route>
        <Route exact path="/Teacher/ListSubject" component={ListSubject}></Route>
        <Route exact path="/Teacher/ListStudent" component={ListStudent}></Route>
        <Route exact path="/Teacher/AddClass" component={AddClass}></Route>
        <Route exact path="/Teacher/StudentOfSubject/:courseID/:courseChar" component={StudentsOfSubject}></Route>
        <Route exact path="/Teacher/Schedule" component={ListScheduleExams} />
        <Route exact path="/Teacher/Schedule/:scheduleID" component={ExamsOfSchedule} />
    </SubjectProvider>
      </Switch>
  </Brt>
}
export default App

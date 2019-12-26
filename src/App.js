import React from 'react'
import LoginForm from './Components/Form/LoginForm'
import {BrowserRouter as Brt, Route,Switch} from 'react-router-dom'
import Admin from './Components/Admin/Admin'
import Resigter from './Components/Resigter/Resigter'
import Information from './Components/Information/Information'
import resultRegister from './Components/resultRegister/resultRegister'
import GroupClass from './Components/GroupClass/GroupClass'
import Notification from './Components/Notification/Notification'
import Teacher from './Components/Teacher/Teacher'
import StudentScreen from './Components/Teacher/StudentScreen'
import SubjectScreen from './Components/Teacher/SubjectScreen'
import Add from './Components/Teacher/Add'
function App() {
  return<Brt>
  <Switch>
    <Route exact path= "/" component = {LoginForm}></Route>
    <Route exact path="/admin" component ={Admin} />
    <Route exact path="/Resigter" component = {Resigter}/>
    <Route exact path="/Information" component = {Information}/>
    <Route exact path="/resultRegister" component = {resultRegister}></Route>
    <Route exact path="/GroupClass" component = {GroupClass}></Route>
    <Route exact path="/Notification" component = {Notification}></Route>
    <Route exact path="/Teacher" component = {Teacher}></Route>
    <Route exact path="/Teacher/StudentScreen" component = {StudentScreen}></Route>
    <Route exact path="/Teacher/SubjectScreen" component = {SubjectScreen}></Route>
    <Route exact path="/Teacher/StudentScreen/Add" component = {Add}></Route>
  </Switch>
  </Brt>
} 
export default App

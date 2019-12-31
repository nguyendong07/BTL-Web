import React from 'react'
import LoginForm from './Components/Form/LoginForm'
import { BrowserRouter as Brt, Route, Switch } from 'react-router-dom'
import Admin from './Components/Admin/Admin'
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
import AddSubject from './Components/Teacher/AddSubject'
import { SubjectProvider } from './Components/Context/SubjectContext'
function App() {
  return <Brt>
    <Switch>
      <Route exact path="/" component={LoginForm}></Route>
      <Route exact path="/Resigter" component={Resigter} />
      <Route exact path="/Information" component={Information} />
      <Route exact path="/resultRegister" component={resultRegister}></Route>
      <Route exact path="/Notification" component={Notification}></Route>
      <Route exact path="/Teacher" component={Teacher}></Route>
      <Route exact path="/Teacher/SubjectScreen" component={SubjectScreen}></Route>
      <Route exact path="/Teacher/ListSubject" component={ListSubject}></Route>
      <SubjectProvider>
        <Route exact path="/GroupClass" component={GroupClass}></Route>
        <Route exact path="/admin" component={Admin} />
      </SubjectProvider>
      <Route exact path="/Teacher/ListSubject/ListStudent" component={ListStudent}></Route>
      <Route exact path="/Teacher/AddClass" component={AddClass}></Route>
      <Route exact path="/Teacher/AddClass/AddSubject" component={AddSubject}></Route>
    </Switch>
  </Brt>
}
export default App

import React from 'react'
import LoginForm from './Components/Form/LoginForm'
import {BrowserRouter as Brt, Route, Switch} from 'react-router-dom'
import Admin from './Components/Admin/Admin'
import Resigter from './Components/Resigter/Resigter'
import Information from './Components/Information/Information'
import resultRegister from './Components/resultRegister/resultRegister'
import GroupClass from './Components/GroupClass/GroupClass'
import Notification from './Components/Notification/Notification'
import Teacher from './Components/Teacher/Teacher'
import {AppProvider} from './AppProvider'
function App() {
  return(
    <AppProvider>
      <Brt>
        <Switch>
          <Route exact path="/" component={LoginForm}></Route>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/Resigter" component={Resigter} />
          <Route exact path="/Information" component={Information} />
          <Route exact path="/resultRegister" component={resultRegister}></Route>
          <Route exact path="/GroupClass" component={GroupClass}></Route>
          <Route exact path="/Notification" component={Notification}></Route>
          <Route exact path="/Teacher" component={Teacher}></Route>
        </Switch>
      </Brt>
    </AppProvider>
  )
} 
export default App

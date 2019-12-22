import React from 'react';
import LoginForm from './Components/Form/LoginForm';
import {BrowserRouter as Brt, Route,Switch} from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import Resigter from './Components/Resigter/Resigter';
import Information from './Components/Information/Information';
import Test from './Components/Test';
function App() {
  return<Brt>
  <Switch>
    <Route exact path= "/" component = {LoginForm}></Route>
    <Route exact path="/admin" component ={Admin} />
    <Route exact path="/Resigter" component = {Resigter}/>
    <Route exact path="/Information" component = {Information}/>
    <Route exact path="/Test" component = {Test}/>
  </Switch>
     
  </Brt>
}


export default App;

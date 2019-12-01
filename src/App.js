import React from 'react';
import LoginForm from './Components/Form/LoginForm';
import {BrowserRouter as Brt, Route,Switch} from 'react-router-dom';
import Admin from './Components/Admin/Admin';
function App() {
  return<Brt>
  <Switch>
     <Route exact path= "/" component = {LoginForm}></Route>
    <Route exact path="/admin" component ={Admin} />
  </Switch>
     
  </Brt>
}


export default App;

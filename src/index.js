import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
// import App from './App';
// import Class from './Components/Room/Room';
// import GroupClass from './Components/GroupClass/GroupClass';
//  import Resigter from './Components/Resigter/Resigter';
// import Information from './Components/Information/Information';
// import Resigter from './Components/Resigter/Resigter';


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

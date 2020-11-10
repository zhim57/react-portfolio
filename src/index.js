import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Dropdown, Button } from 'react-materialize';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/home';
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./components/resume";

import {HashRouter as Router, Route} from 'react-router-dom';

 






ReactDOM.render(

  <React.StrictMode>
 

      <Router>
        <Route exact={true} path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact={true} path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact={true} path="/contact">
          <Contact />
        </Route>
        <Route exact={true} path="/resume">
          <Resume />
        </Route>
      </Router>
    

  

 
  <Footer /> 


  </React.StrictMode>,
  
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





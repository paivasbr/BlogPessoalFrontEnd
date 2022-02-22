import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import UserRegister from './pages/userRegister/UserRegister';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div style={{minHeight: '63.5vh'}}>
          <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>
            
            <Route path='/home'>
              <Home />
            </Route>
            
            <Route path='/userRegister'>
              <UserRegister />
            </Route>
          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

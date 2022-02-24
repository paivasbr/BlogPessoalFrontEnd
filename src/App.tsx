import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '63.5vh' }}>
          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastroUsuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/posts'>
            <ListaPostagem />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

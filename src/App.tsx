import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/Store';
import DeletarTemas from './components/temas/deletarTemas/DeletarTemas';
import CadastroTemas from './components/temas/cadastroTemas/CadastroTemas';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletarPostagens from './components/postagens/deletarPostagens/DeletarPostagens';



function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>
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
            <ListaTemas />
          </Route>
          <Route path='/posts'>
            <ListaPostagens />
          </Route>

          <Route exact path='/formularioPostagens'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagens/:id'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioTemas'>
            <CadastroTemas />
          </Route>
          <Route exact path='/formularioTemas/:id'>
            <CadastroTemas />
          </Route>
          <Route path='/DeletarPostagens/:id'>
            <DeletarPostagens />
          </Route>
          <Route path='/deletarTemas/:id'>
            <DeletarTemas />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;

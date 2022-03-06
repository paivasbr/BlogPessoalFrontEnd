import React from 'react';
import { Box, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário(a) deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,

        });
        history.push('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <header id="header">
            <a id='logo' href="">Logo</a>
            <nav id="nav">
                <button id="btn-mobile">Lendas Amazônicas</button>
                <ul id="menu">
                    <Link to='/home'>
                        <Box mx={1}>
                            <li><a href="/">Home</a></li>
                        </Box>
                    </Link>
                    <Link to='/posts'>
                        <Box mx={1}>
                            <li><a href="/">Postagens</a></li>
                        </Box>
                    </Link>
                    <Link to='/temas'>
                        <Box mx={1} >
                            <li><a href="/">Temas</a></li>
                        </Box>
                    </Link>
                    <Link to='/formularioTemas'>
                        <Box mx={1} >
                            <li><a href="/">Cadastrar Tema</a></li>
                        </Box>
                    </Link>
                    <Link to='/login'>
                        <Box mx={1}  onClick={goLogout}>
                            <li><a href="/">Logout</a></li>
                        </Box>
                    </Link>
                </ul>
            </nav>
        </header>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;
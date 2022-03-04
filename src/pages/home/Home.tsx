import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagens from '../../components/postagens/tabpostagens/TabPostagens';
import ModalPostagens from '../../components/postagens/modalPostagens/ModalPostagens';
import { useHistory } from 'react-router-dom';
import './Home.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';


function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert('Você precisa estar logado')
            history.push("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo1">Seja bem vindo(a).</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo2">Conheça as maravilhosas lendas da Amazônia!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagens />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className="botao">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/Cxprpax.png" alt="" width="685px" height="479px"/>
                </Grid>
                <Grid item xs={12} className="postagens">
                    <TabPostagens />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
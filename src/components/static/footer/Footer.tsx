import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid, Box, Typography } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;


    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className="box1">
                    <Box paddingTop={1} display="flex" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className="texto1">Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <a href="https://www.instagram.com/paivasbr" target="_blank">
                            <InstagramIcon className="rede1" />
                        </a>
                        <a href="https://www.linkedin.com/in/paivasbr" target="_blank">
                            <LinkedInIcon className="rede1" />
                        </a>
                        <a href="https://github.com/paivasbr" target="_blank">
                            <GitHubIcon className="rede2" />
                        </a>
                    </Box>
                </Box>
                <Box className="box2">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className="texto2">© 2022 Copyright</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brazil.generation.org/" className='text-decorator-none'>
                            <Typography variant="subtitle2" gutterBottom className="texto2" align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;
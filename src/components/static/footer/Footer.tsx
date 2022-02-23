import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Grid, Box, Typography} from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex"  justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="texto1">Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <a href="https://www.instagram.com/paivasbr">
                                <InstagramIcon className="rede1"/>
                            </a>
                            <a href="https://www.linkedin.com/in/paivasbr" >
                                <LinkedInIcon className="rede1"/>
                            </a>
                            <a href="https://github.com/paivasbr">
                                <GitHubIcon className="rede2" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="texto2">© 2022 Copyright</Typography>
                        </Box>
                        <Box>
                            <a className='text-decorator-none' href="https://brazil.generation.org/">
                                <Typography variant="subtitle2" gutterBottom className="texto2" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
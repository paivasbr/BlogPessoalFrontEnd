import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Grid, Box, Typography} from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#004d40", height: "85px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white", fontSize: "18px" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/paivasbr">
                                <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/paivasbr" >
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://github.com/paivasbr">
                                <GitHubIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#00352c", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a className='text-decorator-none' href="https://brazil.generation.org/">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="text1">Entrar</Typography>
                        <TextField id='Usuario(a)' label='Usuario(a)' variant='outlined' name='Usuario(a)' margin='normal' fullWidth />
                        <TextField id='Senha' label='Senha' variant='outlined' name='Senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary' className='button2'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/userRegister'className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align="center" className="text2">Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
    );
}

export default Login;
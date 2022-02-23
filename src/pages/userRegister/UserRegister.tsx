import React from 'react';
import './UserRegister.css';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

function UserRegister() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Cadastrar</Typography>
                        <TextField id='Nome' label='Nome' variant='outlined' name='Nome' margin='normal' fullWidth />
                        <TextField id='Usuário(a)' label='Usuário(a)' variant='outlined' name='Usuário(a)' margin='normal' fullWidth />
                        <TextField id='Senha' label='Senha' variant='outlined' name='Senha' margin='normal' type='password' fullWidth />
                        <TextField id='Confirmação de Senha' label='Confirmação de Senha' variant='outlined' name='Confirmação de Senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className='button1'>
                                    Cancelar
                                </Button>
                            </Link>
                                <Button type='submit' variant='contained' className='button2'>
                                    Cadastrar
                                </Button>  
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default UserRegister; 
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let history = useHistory();
    const [confirmacaoDeSenha, setconfirmacaoDeSenha] = useState<String>('')
    const [user, setUser] = useState<User>({

        id: 0, nome: "", usuario: "", senha: ""
    })

    const [userResult, setUserResult] = useState<User>({

        id: 0, nome: "", usuario: "", senha: ""
    })

        useEffect(()=>{
            if(userResult.id !== 0){
                history.push('/login')
                
            }
        }, [userResult])
        
        function confirmacaoDeSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
            setconfirmacaoDeSenha(e.target.value)
        }
        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
        }

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            if (confirmacaoDeSenha ===  user.senha && user.senha.length >= 8) {
                cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)
                alert("Usuário cadastrado com sucesso!");
            } else {
                alert("Verifique se os campos foram preenchidos corretamente.");
            }
        }


    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Cadastrar</Typography>
                        <TextField value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário(a)' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmacaoDeSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmacaoDeSenhaHandle(e)} id='confirmacaoDeSenha' label='Confirmação de Senha' variant='outlined' name='confirmacaoDeSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className="button-cancel button1">
                                    Cancelar
                                </Button>
                            </Link>
                                <Button type='submit' variant='contained' className="button-submit buttton2">
                                    Cadastrar
                                </Button>  
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario; 
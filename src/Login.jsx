import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';
import Menu from './components/Menu';

function Login() {

  const [ email, setEmail ] = useState( "" );
  const [ senha, setSenha ] = useState( "" );
  const [ lembrar, setLembrar ] = useState( false );
  const [ login, setLogin ] = useState( false );
  const [ erro, setErro ] = useState( false );
  const navigate = useNavigate();

  useEffect( () => {

    if( login ) {
        setEmail( "" );
        setSenha( "" );
        navigate( "/" );
    }

  }, [ login ] );

  function Autenticar( evento )
  {
    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify
        (
            {
                email: email,
                senha: senha
            }
        )
    })
    .then( (resposta) => resposta.json() )
    .then( ( json ) =>
    {
        if( json.user ) 
        {
            localStorage.setItem( "usuario", JSON.stringify( json.user._id ));
            setLogin( true );
        } 
        else 
        {
            localStorage.removeItem( "usuario" );
            setErro( true );
        }
    } )
    .catch( ( erro ) => {  setErro( true ) } )
  }

  return (
    <>
    <Menu></Menu>
    <Container component="section" maxWidth="xs" >
        <Box 
        sx={{
            mt:5,
            background: "#EAEDF1",
            padding: "30px",
            borderRadius: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Typography variant="overline" display="block" gutterBottom>
                Entrar
            </Typography>
            <Box component="form" onSubmit={Autenticar}>
                <TextField
                    type="text"
                    label="Email" 
                    variant="standard"
                    margin="normal"
                    value={email}
                    onChange={ (e) => setEmail( e.target.value )}
                    fullWidth
                />
                <TextField
                    type="text"
                    label="Senha" 
                    variant="standard"
                    margin="normal"
                    value={senha}
                    onChange={ (e) => setSenha( e.target.value )}
                    fullWidth
                />
                <FormControlLabel
                    control={ <Checkbox value={lembrar} name="lembrar" onChange={(e) => setLembrar( !lembrar ) } />}
                    label="Lembrar-me"
                />
                <Button 
                variant="contained"
                type="submit"
                fullWidth
                sx={{mt: 3, mb: 3, borderRadius: "15px"}}
                > Entrar
                </Button>
                { erro && ( <Alert severity="error" sx={{ mb: 2 }}>Revise seus dados e tente novamente</Alert> ) }
                <Grid container>
                    <Grid item xs>
                        <Typography variant="overline" display="block" gutterBottom>
                            Esqueci a senha
                        </Typography>                        
                    </Grid>
                    <Grid item>
                        <a href="cadastro">
                            <Typography variant="overline" display="block" gutterBottom>
                                Criar conta
                            </Typography>                            
                        </a>  
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
    </>
  )
}

export default Login;
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';

function Cadastro() {

  const [ nome, setNome ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ telefone, setTelefone ] = useState( "" );
  const [ cpf, setCpf ] = useState( "" );
  const [ senha, setSenha ] = useState( "" );
  const [ cadastro, setCadastro ] = useState( false );
  const [ erro, setErro ] = useState( false );

  function Cadastrar( evento ) {

    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "usuarios", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                nome: nome,
                email: email,
                cpf: cpf,
                telefone: telefone,
                senha: senha
            }
        )
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => {
      if( json.cpf ) 
      {
        setCadastro( true );
        setErro( false );
      } 
      else 
      {
        setErro( true );
        setCadastro( false );
      }
    } )
    .catch( ( erro ) => { setErro( true ) } )
    
  }

  useEffect( () => {

    setNome( "" );
    setEmail( "" );
    setCpf( "" );
    setTelefone( "" );
    setSenha( "" );

  }, [ cadastro ] );

  return (
    <>
    <Menu></Menu>
    <Container component="section" maxWidth="sm" >
      <Box sx={{
        mt:5,
        background: "#EAEDF1",
        padding: "30px",
        borderRadius: "28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 10
      }}>
        <Typography variant="overline" display="block" gutterBottom>
          Preencha os dados da musica
        </Typography>
        <Box component="form" onSubmit={Cadastrar}>
          <TextField 
            type="text"
            label="Nome" 
            variant="standard" 
            margin="normal"
            value={nome}
            onChange={ (e) => setNome( e.target.value ) }
            fullWidth
            required
          />
          <TextField 
            type="text"
            label="Email" 
            variant="standard" 
            margin="normal"
            value={email}
            onChange={ (e) => setEmail( e.target.value ) }
            fullWidth
            required
          />
          <TextField 
            type="text"
            label="CPF" 
            variant="standard" 
            margin="normal"
            value={cpf}
            onChange={ (e) => setCpf( e.target.value ) }
            required
            sx={{width:"45%", mr: "40px"}}
          />
          <TextField 
            type="text"
            label="Telefone" 
            variant="standard" 
            margin="normal"
            value={telefone}
            onChange={ (e) => setTelefone( e.target.value ) }
            required
            sx={{ width: "45%", }}
          />
          <TextField 
            type="text"
            label="Criar senha" 
            variant="standard" 
            margin="normal"
            value={senha}
            onChange={ (e) => setSenha( e.target.value ) }
            required
            fullWidth
          />
          <Button 
            variant="contained"
            type="submit"
            fullWidth
            sx={{mt: 3, mb: 3, borderRadius: "15px"}}
            > Cadastrar
          </Button>
          { cadastro && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }}>Obrigado por se cadastrar</Alert>)}
          { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >Desculpe tente novamente</Alert> )}         
        </Box>
      </Box>
    </Container>
    </>
  )
}

export default Cadastro;
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import Menu from './components/Menu';

function Filmes() {
const [titulo, setTitulo] = useState( "" );
const [descricao, setDescricao] = useState( "" );
const [ano, setAno] = useState( "" );
const [duracao, setDuracao] = useState( "" );
const [categoria, setCategoria] = useState( "" );
const [imagem, setImagem] = useState( "" );
const[ filme, setFilme ] = useState( "" );
const [ errof, setErroF ] = useState( false );

    function CadastrarFilme(evento){
        evento.preventDefault();

    fetch( process.env.REACT_APP_BACKEND + "filmes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    categoria: categoria,
                    imagem: imagem
                }
                )
            } )
            .then( (resposta) => resposta.json() )
            .then( (json) => {
    
                if( json.titulo ){
                    setFilme( true );
                    setErroF( false );
                } else{
                    setErroF( true );
                    setFilme( false );
                }
            } )
            .catch( (errof) => { setErroF( true ) })
    }
    
        useEffect( () => {
    
            setTitulo( "" );
            setDescricao( "" );
            setAno( "" );
            setDuracao( "" );
            setCategoria( "" );
            setImagem( "" );
          
        }, [ filme ] );

  return (
    <>
    <Menu></Menu>
    <Container component="section" maxWidth="sm">
    <Box sx={{
                mt:5,
                background: "#dce0e6",
                padding: "30px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography component="h1" variant='h4'>Filmes</Typography>
                { errof && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }}>Desculpe tente novamente</Alert>)}
                {filme && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }}>Obrigado por cadastrar</Alert>)}
            <Box component="form" onSubmit={CadastrarFilme}>
                <TextField
                type="text" 
                label="Título" 
                variant="filled" 
                margin="normal"
                value={titulo}
                onChange={ (e) => setTitulo( e.target.value )}
                fullWidth
                />
                <TextField
                type="text" 
                label="Descrição" 
                variant="filled" 
                margin="normal"
                value={descricao}
                onChange={ (e) => setDescricao( e.target.value )}
                fullWidth
                />
                <TextField
                type="number" 
                label="Ano" 
                variant="filled" 
                margin="normal"
                value={ano}
                onChange={ (e) => setAno( e.target.value )}
                fullWidth
                />
                <TextField
                type="text" 
                label="Duração" 
                variant="filled" 
                margin="normal"
                value={duracao}
                onChange={ (e) => setDuracao( e.target.value )}
                fullWidth
                />
                <TextField
                type="text" 
                label="Categoria" 
                variant="filled" 
                margin="normal"
                value={categoria}
                onChange={ (e) => setCategoria( e.target.value )}
                fullWidth
                />
                <TextField
                type="text" 
                label="Url da imagem" 
                variant="filled" 
                margin="normal"
                value={imagem}
                onChange={ (e) => setImagem( e.target.value )}
                fullWidth
                />
                <Button  type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2} }>Cadastrar filme</Button>
                </Box>

            </Box>
    </Container>
    </>
  )
}

export default Filmes;
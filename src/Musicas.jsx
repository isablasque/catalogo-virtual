import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import SendIcon from '@mui/icons-material/Send';

function Musicas() {

    const [nome, setNome] = useState( "" );
    const [cantor, setCantor] = useState( "" );
    const [duracao, setDuracao] = useState( "" );
    const [album, setAlbum] = useState( "" );
    const [imagem, setImagem] = useState( "" );
    const [musica, setMusica ] = useState( "" );
    const [erro, setErro ] = useState( false );

    function CadastrarMusica(evento) {

        evento.preventDeFault();

        fetch( process.env.REACT_APP_BACKEND + "musicas", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    nome: nome,
                    cantor: cantor,
                    duracao: duracao,
                    album: album,
                    imagem: imagem
                }
            )
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => {

                if( json.nome ){
                    setMusica( true );
                    setErro( false );
                } else{
                    setErro( true );
                    setMusica( false );
                }
            })
        .catch( (erro) => { setErro( true ) })
    }

    useEffect( () => {

        setNome( "" );
        setCantor( "" );
        setDuracao( "" );
        setAlbum( "" );
        setImagem( "" );

    }, [musica] );

    return (
        <>
        <Menu></Menu>
        <Container component="section" maxWidth="sm">
            <Box sx={{
                mt:5,
                background: "#dce0e6",
                padding: "30px",
                borderRadius: "28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography variant="overline" display="block" gutterBottom>
                    Preencha os dados da musica
                </Typography>
                <Box component="form" width="100%" onSubmit={CadastrarMusica}>
                    <TextField
                    type="text"
                    label="Nome" 
                    variant="standard"
                    margin="normal"
                    value={nome}
                    onChange={ (e) => setNome( e.target.value )}
                    fullWidth
                    />
                    <TextField
                    type="text"
                    label="Cantor / Banda" 
                    variant="standard"
                    margin="normal"
                    value={cantor}
                    onChange={ (e) => setCantor( e.target.value )}
                    fullWidth
                    />                    
                    <TextField
                    type="text"
                    label="Albúm / Single" 
                    variant="standard"
                    margin="normal"
                    value={album}
                    onChange={ (e) => setAlbum( e.target.value )}
                    sx={{width:"45%", mr: "30px"}}
                    />
                    <TextField
                    type="text"
                    label="Duração" 
                    variant="standard"
                    margin="normal"
                    value={duracao}
                    onChange={ (e) => setDuracao( e.target.value )}
                    sx={{ width: "45%", }}
                    />
                    <TextField
                    type="text"
                    label="Url da capa do album / single"
                    variant="standard"
                    margin="normal"
                    value={imagem}
                    onChange={ (e) => setImagem( e.target.value )}
                    fullWidth
                    />
                </Box>
                <Button 
                variant="contained"
                endIcon={<SendIcon/>}
                type="submit"
                fullWidth
                sx={{mt: 3, mb: 3, borderRadius: "15px"}}
                > Cadastrar música
                </Button>
                { erro && ( <Alert severity="warning" variant="standard" sx={{ mt: 2, mb: 2 }}>Desculpe tente novamente</Alert>)}
                { musica && ( <Alert severity="success" variant="standard" sx={{ mt: 2, mb: 2 }}>Obrigado por cadastrar</Alert>)}
            </Box>
        </Container>
        </>
    )
}

export default Musicas;
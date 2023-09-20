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
    const [musica, setMusica ] = useState( false );
    const [errof, setErroF ] = useState( false );

    function CadastrarMusica(evento) {

        evento.preventDefault();
        console.log("ue" );

        fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: nome,
                    descricao: cantor,
                    ano: "",
                    duracao: duracao,
                    imagem: imagem,
                    categoria: album,
                    usuario: localStorage.getItem( "usuario" )
                }
            )
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => {

                if( json.titulo ){
                    setMusica( true );
                    setErroF( false );
                } else{
                    setErroF( true );
                    setMusica( false );
                }
            })
        .catch( (errof) => { setErroF( true ) })
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
        <Menu />
        <Container component="section" maxWidth="sm">
            <Box sx={{
                mt:5,
                background: "#EAEDF1",
                padding: "30px",
                borderRadius: "28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography variant="overline" display="block" gutterBottom>
                    Preencha os dados da musica
                </Typography>
                { musica && ( <Alert severity="success"  sx={{ mt: 2 }}>Obrigado por cadastrar</Alert>)}
                { errof && ( <Alert severity="warning"  sx={{ mt: 2 }}>Desculpe tente novamente</Alert>)}  
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
                    <Button 
                    variant="contained"
                    endIcon={<SendIcon/>}
                    type="submit"
                    fullWidth
                    sx={{mt: 3, mb: 3, borderRadius: "15px"}}
                > Cadastrar música
                </Button>           
                </Box>
            </Box>
        </Container>
        </>
    )
}

export default Musicas;
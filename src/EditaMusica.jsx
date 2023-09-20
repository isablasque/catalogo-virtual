import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from './components/Menu';
import SendIcon from '@mui/icons-material/Send';

function EditaMusica() {

    const { id } = useParams();

    const [nome, setNome] = useState( "" );
    const [cantor, setCantor] = useState( "" );
    const [duracao, setDuracao] = useState( "" );
    const [album, setAlbum] = useState( "" );
    const [imagem, setImagem] = useState( "" );
    const [editar, setEditar ] = useState( "" );
    const [erro, setErro ] = useState( "" );

    useEffect( () => {
        const usuario = localStorage.getItem( "usuario" );
        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/" + id, {
            method: "GET",
            headers: 
            {
                'Content-type': 'application/json'
            },
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => {
            if(!json.status) {
                setNome(json.titulo);
                setCantor(json.descricao);
                setDuracao(json.duracao);
                setAlbum(json.categoria);
                setImagem(json.imagem);
            }
            else {
                setErro( "Musica não encontrada" )
            }
        })
        .catch( (erro) => {setErro( true )})
    }, [] );

    function Editar(evento){
        evento.preventDefault();

        fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method: "PUT",
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
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
        .then((resposta) => resposta.json())
        .then((json) => 
        {
          if( json._id)
          {
            setEditar( true );
            setErro(false)
          }
          else
          {
            setErro( "Erro ao processar sua requisição" );
            setEditar(false);
          }
        } )
        .catch((erro) => { setErro(true) })        
    }
    return (
        <>
        <Menu></Menu>
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
                    Edite os dados da musica
                </Typography>
                <Box component="form" width="100%" onSubmit={Editar}>
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
                    type="submit"
                    fullWidth
                    sx={{mt: 3, mb: 3, borderRadius: "15px"}}
                    > Editar
                    </Button>
                    { erro && ( <Alert severity="warning" variant="standard" sx={{ mt: 2, mb: 2 }}>{erro}</Alert>)}
                    { editar && ( <Alert severity="success" variant="standard" sx={{ mt: 2, mb: 2 }}>Filme editado com sucesso</Alert>)}
                </Box>               
            </Box>
        </Container>
        </>
    )
}

export default EditaMusica;
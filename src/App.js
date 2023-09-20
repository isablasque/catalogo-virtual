import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Menu from "./components/Menu";
import Musica from "./components/Musica"
import "./App.module.css"


function App() {

  const [ musicas, setMusicas ] = useState();
  const [ erro, setErro ] = useState();

  useEffect(() => {

    const usuario= localStorage.getItem( "usuario" )

    fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario, {
        headers: {
            'Content-Type': 'application/json'
        }
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => { setMusicas( json ) } ) 
    .catch( ( erro ) => { setErro( true ) } )

  }, [])

function Excluir( evento, id ){

  evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "produtos", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
              id: id,
              usuario: localStorage.getItem( "usuario" )
            }
        )
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => {
      const novaLista = musicas.filter( (musica) => musica._id !== id );
      setMusicas( novaLista );
    } )
    .catch( ( erro ) => {  setErro( true ) } )
}

  return (
    <>
      <Menu></Menu>
      <Container sx={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
        { musicas && (
          musicas.map( (musica, index) => (
            <Musica
            imagem={musica.imagem}
            titulo={musica.titulo}
            descricao={musica.descricao}
            duracao={musica.duracao}
            categoria={musica.categoria}
            excluir={ (e) => Excluir( e, musica._id)}
            id={musica._id}
            ></Musica>
          ))
        )}
      </Container>
    </>
  );
}

export default App;
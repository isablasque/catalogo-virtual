import React from 'react'
import Style from "./menu.module.css"
import { Fab } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Menu() {
  return (
    <section className={Style.menu}>
            <ul>
                <li>
                    <Fab size="small" href="/">
                        <LibraryMusicIcon/>
                    </Fab>
                </li>
                <li>
                    <Fab variant="extended" href="Filmes" size="small">
                        <MusicNoteIcon sx={{ mr: 1 }}/>
                        Add song
                    </Fab>
                </li>
                <li>
                    <Fab variant="extended" href="Login" size="small">
                        <AccountCircleIcon sx={{ mr: 1 }}/>
                        Entrar
                    </Fab>
                </li>
                <li>
                    <Fab variant="extended" href="Cadastro" size="small">
                        <AccountCircleIcon sx={{ mr: 1 }}/>
                        Cadastre-se
                    </Fab>
                </li>
            </ul>
    </section>
  )
}

export default Menu
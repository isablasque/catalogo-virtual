import React from 'react'
import Style from "./menu.module.css"
import { Fab } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Menu() {
  return (
    <section>
        <div className={Style.top}></div>
        <header>
            <h1>Sharing Songs</h1>
        </header>
        <section className={Style.menu}>
            <ul>
                <li>
                    <Fab size="small" href="/" color="info">
                        <LibraryMusicIcon/>
                    </Fab>
                </li>
                <li>
                    <Fab variant="extended" href="Musicas" size="small" color="info">
                        <MusicNoteIcon sx={{ mr: 1 }}/>
                        Add song
                    </Fab>
                </li>
                <li>
                    <Fab variant="extended" href="Login" size="small" color="info">
                        <AccountCircleIcon sx={{ mr: 1 }}/>
                        Entrar
                    </Fab>
                </li>
                <li>
                    <Fab variant="extended" href="Cadastro" size="small" color="info">
                        <AccountCircleIcon sx={{ mr: 1 }}/>
                        Cadastre-se
                    </Fab>
                </li>
            </ul>
        </section>
    </section>
    
  )
}

export default Menu
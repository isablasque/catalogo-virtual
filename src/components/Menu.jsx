import React from 'react'
import Style from "./menu.module.css"
import { Fab } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';

function Menu() {
  return (
    <section className={Style.menu}>
            <ul>
                <li>
                    <Fab variant="extended" href="Cadastro">
                        <AccountCircleIcon sx={{ mr: 1 }}/>
                        Cadastre-se
                    </Fab>
                </li>
                <li>
                    <Fab color="primary" aria-label="add" size="medium" href="Filmes">
                        <AddIcon  />
                    </Fab>
                </li>
            </ul>
    </section>
  )
}

export default Menu
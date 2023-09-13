import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

function Filme(props) {
  return (
    <Card  sx={{ maxWidth: 345}}>
        <CardActionArea>
            <CardMedia 
            component="img"
            alt={props.titulo}
            height="140"
            image={props.imagem}>
            </CardMedia>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.descricao}
                </Typography>
                <Grid container>
                    <Grid item xs={4}>
                        <span>{props.categoria}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>{props.ano}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>{props.duracao}</span>
                    </Grid>
                </Grid>
            </CardContent>
        </CardActionArea>
        <Grid container>
            <Grid item xs={4}>
                <button onClick={props.excluir}>x</button>
            </Grid>
            <Grid item xs={4}>
                <Link href={ "edicao/" + props.id}>Edição</Link>
            </Grid>
        </Grid>
    </Card>
  )
}

export default Filme
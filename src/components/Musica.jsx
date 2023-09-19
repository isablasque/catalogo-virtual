import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';

function Musica(props) {
    
    return (
        <>
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.nome}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.cantor}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <Grid item xs={4}>
                            <span>{props.duracao}</span>
                        </Grid>
                        <Grid item xs={4}>
                            <span>{props.album}</span>
                        </Grid>
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
            <CardMedia component="img"
                sx={{ width: 151 }}
                image={props.imagem}>
            </CardMedia>
            <Grid container>
                <Grid item xs={4}>
                    <button onClick={props.excluir}>x</button>
                </Grid>
                <Grid item xs={4}>
                    <Link href={ "edicao/" + props.id}><DeleteIcon></DeleteIcon></Link>
                </Grid>
            </Grid>
        </Card>
        </>
    )
}

export default Musica;
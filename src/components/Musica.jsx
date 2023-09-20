import { Box, Card, Grid, CardContent, CardMedia, Typography, IconButton, Link } from '@mui/material';
import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import Style from './musica.module.css'


function Musica(props) {

    const theme = useTheme();
    
    return (
        <>
        <Card  sx={{ maxWidth: 345, padding: 2, mt: 5, backgroundColor: "#EAEDF1"}} >
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.titulo}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.descricao}
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
            <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={props.imagem}
            className='img'
            />
        </Card>
        <Card sx={{ display: 'flex', mt: 1.2, padding: 1 }} >
            <Grid textAlign="left" width="50%" >
                <span>{props.categoria}</span>
            </Grid>
            <Grid textAlign="right" width="50%">
                <span>{props.duracao}</span>
            </Grid>            
        </Card>
        <Grid container className={Style.bot}>
            <Grid mr={1} >
                <button onClick={props.excluir}><DeleteIcon></DeleteIcon></button>
            </Grid>
            <Grid >
                <a href={ "edicao/" + props.id }><button><EditIcon></EditIcon></button></a>
            </Grid>
        </Grid>
        </Card>
        </>
    )
}

export default Musica;
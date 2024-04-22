import React, { useEffect } from 'react';
import thunks from '../store/repository/thunks';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import useRepository from './hooks/useRepository';

function Repository(props) {
    const { repository, isLoading } = useRepository()

    return (
        <>
            {!isLoading ?
                Object.keys(repository).length ?

                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={repository.owner['avatar_url']}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {repository.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                stars: {repository.stargazers_count}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                followers: {repository.subscribers_count}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                watchers: {repository.watchers_count}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to={repository.html_url} size="small" target="_blank">Go to GitHub</Button>
                        </CardActions>
                    </Card>
                    : null
                : <Skeleton variant="rectangular" width={300} height={300} />}



        </>

    );
}

export default Repository;
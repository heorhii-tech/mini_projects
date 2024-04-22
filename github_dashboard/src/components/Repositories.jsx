
import React from 'react';
import '../styles.scss'
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import useLanguages from './hooks/useLanguages';
import useRepositories from './hooks/useRepositories';


function Repositories(props) {
    const { lang } = useLanguages()
    const { repositories, isLoading } = useRepositories();

    return (

        <div className='wrapper_repos'>
            {!isLoading ?
                repositories.items.length ?
                    repositories.items.map((item, index) => {
                        return (
                            <Card className='card' key={index} sx={{ width: '18%' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={item.owner['avatar_url']}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Button component={Link} to={`repository/${item.id}`} size="small">Learn</Button>
                                </CardActions>
                            </Card>
                        )
                    }) : <Stack sx={{ width: '90%', }} spacing={2}>

                        <Alert variant="filled" severity="warning">
                            Repositories for {lang} not found
                        </Alert>

                    </Stack>
                : [...new Array(20)].map((item, index) => {
                    return <Skeleton key={index} animation="wave" height={200} width="18%" />
                })
            }




        </div>
    );
}

export default Repositories;
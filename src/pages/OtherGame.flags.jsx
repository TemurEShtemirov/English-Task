import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Modal } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { PopularCountries } from '../components/data/play.flags.js';

export default function OtherGamePlags() {
    const [openModal, setOpenModal] = React.useState(null);
    const [selectedFlag, setSelectedFlag] = React.useState(null);

    const handleOpenModal = (flagId) => {
        setOpenModal(true);
        setSelectedFlag(flagId);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="container">
            <Link to={"/"} className='btn btn-primary text-center mt-5 m-5'>← Back To Home</Link>

            <Grid container spacing={2} marginTop={10}>
                {PopularCountries.map((flag) => (
                    <Grid item xs={12} sm={6} md={4} key={flag.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleOpenModal(flag.id)}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={flag.image}
                                    alt="flags"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Guess Countries Following Flags
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => handleOpenModal(flag.id)}>
                                    Answer
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Modal open={openModal} onClose={handleCloseModal}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
                    <img src={PopularCountries.find((flag) => flag.id === selectedFlag)?.image} alt="Country Image" />
                    <Typography variant="h4" component="div" align="center">
                        Answer
                    </Typography>
                    <Typography variant="body1" component="div" align="center" margin={5}>
                        The answer is {PopularCountries.find((flag) => flag.id === selectedFlag)?.name}.
                        The answer is {PopularCountries.find((flag) => flag.id === selectedFlag)?.population}.
                        The answer is {PopularCountries.find((flag) => flag.id === selectedFlag)?.info}.
                    </Typography>
                </div>
            </Modal>

            <Outlet />
        </div>
    );
}
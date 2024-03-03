import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Link, Outlet } from 'react-router-dom';
import { OtherGame } from '../components/data/other.game';

export default function OtherGames() {
    const [openOuterModal, setOpenOuterModal] = useState(false);
    const [openInnerModal, setOpenInnerModal] = useState(false);
    const [selectedOtherGame, setSelectedOtherGame] = useState(null);
    const navigate = useNavigate();

    const handleOpenOuterModal = (OtherGameId) => {
        if (OtherGameId === 5) {
            setOpenInnerModal(true);
        } else {
            setOpenOuterModal(true);
            setSelectedOtherGame(OtherGameId);
        }
    };

    const handleCloseOuterModal = () => {
        setOpenOuterModal(false);
        setOpenInnerModal(false);
    };

    const handleNavigate = () => {
        navigate('/play/flags');
    };

    return (
        <div className="container">
            <Link to={"/"} className='btn btn-primary text-center mt-5 m-5'>← Back To Home</Link>

            <Grid container spacing={2} marginTop={10}>
                {OtherGame.map((OtherGame) => (
                    <Grid item xs={12} sm={6} md={4} key={OtherGame.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleOpenOuterModal(OtherGame.id)}>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {OtherGame.title_game1}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => handleOpenOuterModal(OtherGame.id)}>
                                    Info
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Modal open={openOuterModal} onClose={handleCloseOuterModal}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
                    <Typography variant="h4" component="div" align="center">
                        Info
                    </Typography>
                    <Typography variant="body1" component="div" align="center" margin={5}>
                        {OtherGame.find((OtherGame) => OtherGame.id === selectedOtherGame)?.desc1}.
                    </Typography>
                    {selectedOtherGame === 5 && (
                        <Button variant="contained" color="primary" onClick={() => setOpenInnerModal(true)}>
                            More Info
                        </Button>
                    )}
                </div>
            </Modal>

            <Modal open={openInnerModal} onClose={() => setOpenInnerModal(false)}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
                    <Typography variant="h4" component="div" align="center">
                        Additional Info
                    </Typography>
                    <Typography variant="body1" component="div" align="center" margin={5}>
                        Guess Countries Following Flags" is a game where players identify countries based on their flags.
                    </Typography>
                    <Button variant="contained" color="primary" style={{ width: "100%" }} onClick={handleNavigate}>
                        Play the Game
                    </Button>
                </div>
            </Modal>
            <Outlet />
        </div>
    );
}

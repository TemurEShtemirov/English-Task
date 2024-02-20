import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Grid, Modal } from '@mui/material';
import Flags from '../assets/images/flags.png';
import Riddle from '../assets/images/riddle.png';
import Proverbs from '../assets/images/proverb.png';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (title) => {
    setOpenModal(title);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <>
      <Grid container spacing={2} marginTop={30} marginLeft={7} justifyContent="center" alignItems="center" alignContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => handleOpenModal('Proverbs')}>
              <CardMedia component="img" height="140" image={Proverbs} alt="Proverbs" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  To Quickly Say
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleOpenModal('Proverbs')}>
                Info
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => handleOpenModal('Riddle')}>
              <CardMedia component="img" height="140" image={Riddle} alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Riddle
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleOpenModal('Riddle')}>
                Info
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => handleOpenModal('Flags')}>
              <CardMedia component="img" height="140" image={Flags} alt="Flags" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Flags
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleOpenModal('Flags')}>
                Info
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Modal open={openModal === 'Proverbs'} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
          <Typography variant="h4" component="div" align="center">
            To Say Quickly
          </Typography>
          <Typography variant="body1" component="div" align="center" width={"auto"} marginTop={5}>
            In the "Quick Sentence Game," players are given a prompt or a category and challenged to come up with short, rapid-fire sentences related to the given topic. The goal is to think quickly and creatively to generate sentences that fit the given criteria. It's a fast-paced and lively game that encourages quick thinking, imagination, and the ability to come up with concise and on-the-spot responses.
          </Typography>
          <Link className="btn btn-outline-primary mt-3 " style={{ width: "100%" }} to={"/proverbs"}>
            Play !
          </Link>
        </div>
      </Modal>

      <Modal open={openModal === 'Riddle'} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
          <Typography variant="h4" component="div" align="center">
            Riddle
          </Typography>
          <Typography variant="body1" component="div" align="center" width={"auto"} marginTop={5}>
            In this riddle, a cloud is the answer. Clouds can float in the sky, giving the impression of flying without wings. Rainfall from clouds can be interpreted as crying without eyes. Additionally, when a cloud passes over the sun, it creates darkness on the ground, symbolizing the darkness that follows wherever the cloud goes.
          </Typography>
          <Link className="btn btn-outline-primary mt-3" style={{ width: "100%" }} to={"/riddle"}>
            Play !
          </Link>
        </div>
      </Modal>

      <Modal open={openModal === 'Flags'} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
          <Typography variant="h4" component="div" align="center">
            Flags
          </Typography>
          <Typography variant="body1" component="div" align="center" width={"auto"} marginTop={5}>
            In the "Countries and Flags" game, participants are presented with flags of different countries and are tasked with correctly identifying the corresponding country. It's a visual challenge that tests players' knowledge of national flags and their ability to recognize and associate them with specific countries. It's an engaging and educational game that helps improve geographical awareness and flag recognition skills.
          </Typography>
          <Link className="btn btn-outline-primary mt-3" style={{ width: "100%" }} to={"/flags"}>
            Play !
          </Link>
        </div>
      </Modal>
      <Outlet/>
    </>
  );
}
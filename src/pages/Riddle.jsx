import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Modal } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { riddle } from '../components/data/riddle';

export default function Riddle() {
  const [openModal, setOpenModal] = React.useState(null);
  const [selectedRiddle, setSelectedRiddle] = React.useState(null);

  const handleOpenModal = (riddleId) => {
    setOpenModal(true);
    setSelectedRiddle(riddleId);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="container">
      <Link to={"/"} className='btn btn-primary text-center mt-5 m-5'>← Back To Home</Link>

      <Grid container spacing={2} marginTop={10}>
        {riddle.map((riddle) => (
          <Grid item xs={12} sm={6} md={4} key={riddle.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleOpenModal(riddle.id)}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {riddle.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {riddle.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleOpenModal(riddle.id)}>
                  Answer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
          <Typography variant="h4" component="div" align="center">
            Answer
          </Typography>
          <Typography variant="body1" component="div" align="center" margin={5}>
            The answer is {riddle.find((riddle) => riddle.id === selectedRiddle)?.answer}.
          </Typography>
        </div>
      </Modal>

      <Outlet />
    </div>
  );
}
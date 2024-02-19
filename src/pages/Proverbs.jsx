import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { quicky_say } from '../components/data/provebs';
import { Link, Outlet } from 'react-router-dom';


export default function Proverbs() {
  return (
    <>
      <Box>
        <Link to={"/"} className='btn btn-primary text-center mt-5 m-5'>← Back To Home</Link>
        <Grid container spacing={3} marginTop={15} marginLeft={7} justifyContent="center" alignItems="center" alignContent="center">

          {quicky_say.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Box>
      <Outlet />
    </>
  )
}

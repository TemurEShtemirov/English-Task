import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Flags from '../components/data';

export default function FlagsPage() {
  return (
    <div className="container">
      <Grid container spacing={2}>
        {Flags.map((flag) => (
          <Grid item xs={12} sm={6} md={4} key={flag.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div" align="center">
                  {flag.title}
                </Typography>
             
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
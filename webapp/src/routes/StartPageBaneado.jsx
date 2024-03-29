import React from 'react'

import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
  media: {
    objectFit: 'contain'
  }
}));



const Start = () => {
  const classes = useStyles();
  return  <Grid container spacing={3} alignItems="center" justify="center" direction="column">
    <Grid container item xs={12} sm={9} md={6} spacing={0} justify="center"
          alignItems="stretch"
          direction="column">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h2" component="h1" style = {{fontWeight: 800}}>
           USTED HA SIDO BANEADO
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid container item xs={12} sm={9} md={6} spacing={0} justify="center"
          alignItems="stretch"
          direction="column">
      <Card>
        <CardContent>
           <img src="/img/alert.png" alt="logo"  style={{marginBottom: "1em"}}/>
          <Typography component="p" style = {{fontWeight: 800}}>
            Ha sido baneado por un comportamiento indebido 
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>;
}

export default Start

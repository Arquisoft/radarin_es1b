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
  },
}));



const Start = () => {
  const classes = useStyles();
  return  <Grid container spacing={3} alignItems="center" justify="center" direction="column">
    <Grid container item xs={12} sm={9} md={6} spacing={0} justify="center"
          alignItems="stretch"
          direction="column">
		  {/*<Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            View & browse Solid profiles
          </Typography>
          <Typography component="p">
            This app allows to view and browse through Solid WebID Profiles.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
              size="small" color="primary"
              component={Link}
              variant={"contained"}
              to={toProfile('https://angelo.veltens.org/profile/card#me')}>
            Show example profile
          </Button>
        </CardActions>
		  </Card>*/}
    </Grid>
    <Grid container item xs={12} sm={9} md={6} spacing={0} justify="center"
          alignItems="stretch"
          direction="column">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ¿Aún no tienes un perfil? 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component="a" href="https://solidcommunity.net/register">
            Conseguir un perfil
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid container item xs={12} sm={9} md={6} spacing={0} justify="center"
          alignItems="stretch"
          direction="column">
      <Card>
        <CardMedia
            component="img"
            height="70"
            className={classes.media}
            alt="Solid Logo"
            image="https://solid.mit.edu/assets/img/solid-logo.svg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ¿Qué es Solid?
          </Typography>
          <Typography component="p">
            Solid es un nuevo proyecto dirigido por Tim Berners-Lee,
            el inventor de la World Wide Web. El proyecto trata de cambiar
            radicalmente cómo las aplicaciones Web funcionan a día de hoy,
            basándose en la auténtica propiedad de datos y una mayor privacidad.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component="a" href="https://solid.mit.edu/">
            Aprender más
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>;
}

export default Start

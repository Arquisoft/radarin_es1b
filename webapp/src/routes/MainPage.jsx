import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import App from './App';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Radarin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7];
const nombres = ["Alberto Freije", "Manuel Arroyo", "Samuel Rodríguez", "Beatriz Arbizu", "Guillermo Astorga", "Alejandro Álvarez ", "Xurde García"];
const fotos = ["https://i.ibb.co/4RyrNRm/fotita.jpg","https://i.ibb.co/0fh4JCk/Whats-App-Image-2021-05-03-at-15-58-47.jpg","https://i.ibb.co/85kNKtx/avatar.jpg","https://i.ibb.co/NrxChWL/fotoooo.jpg","https://i.ibb.co/dQRKVGY/Whats-App-Image-2021-05-03-at-16-51-03.jpg","https://i.ibb.co/MpKW3Nm/IMG-20210503-165633.jpg","https://i.ibb.co/By37bRD/IMG1-0001.jpg"]

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <App/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{ fontWeight: 800, fontFamily: 'sans-serif' , marginBottom: "0.5em"}}>
              ¿QUÉ ES SOLID?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{ marginBottom: "1em"}}>
            Solid es un nuevo proyecto dirigido por Tim Berners-Lee,
            el inventor de la World Wide Web. El proyecto trata de cambiar
            radicalmente cómo las aplicaciones Web funcionan a día de hoy,
            basándose en la auténtica propiedad de datos y una mayor privacidad.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <a style={{fontFamily: 'sans-serif', textTransform: "uppercase", color: "#FFF", backgroundColor: "#5ca9fb",  backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)", padding: "14px 34px", letterSpacing: "1px",margin: 0, 
                fontSize: "15px",
                fontWeight: 500,
                borderRadius: "25px",
                transition: "all 0.5s linear",
                border: 0}}
                  href="https://solidcommunity.net/register"
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Crear cuenta SOLID
                </a>{' '}
                </Grid>
                <Grid item>
                <a style={{fontFamily: 'sans-serif', textTransform: "uppercase", color: "#FFF", backgroundColor: "#5ca9fb",  backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)", padding: "14px 34px", letterSpacing: "1px",margin: 0, 
                fontSize: "15px",
                fontWeight: 500,
                borderRadius: "25px",
                transition: "all 0.5s linear",
                border: 0}}
                  href="https://solid.mit.edu/"
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Aprende más
                </a>{' '}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{ fontWeight: 800, fontFamily: 'sans-serif' , marginBottom: "0.5em"}}>
              ¿QUÉ ES RADARIN?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{ marginBottom: "1em"}}>
            Radarin es un sistema para facilitar encuentros entre amigos. 
            La aplicación podrá acceder a la información de localización del teléfono móvil de los usuarios que voluntariamente la tengan activada y permitirá que otros usuarios que sean sus amigos puedan conocer cuándo están cerca.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <a style={{fontFamily: 'sans-serif', textTransform: "uppercase", color: "#FFF", backgroundColor: "#6EF139",  backgroundImage: "linear-gradient(to right, #6EF139 0%, #3AB309 100%)", padding: "14px 34px", letterSpacing: "1px",margin: 0, 
                fontSize: "15px",
                fontWeight: 500,
                borderRadius: "25px",
                transition: "all 0.5s linear",
                border: 0}}
                  href="https://radarines1bwebapp.herokuapp.com/docs/"
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Documentación
                </a>{' '}
                </Grid>
                <Grid item>
                <a style={{fontFamily: 'sans-serif', textTransform: "uppercase", color: "#FFF", backgroundColor: "#6EF139",  backgroundImage: "linear-gradient(to right, #6EF139 0%, #3AB309 100%)", padding: "14px 34px", letterSpacing: "1px",margin: 0, 
                fontSize: "15px",
                fontWeight: 500,
                borderRadius: "25px",
                transition: "all 0.5s linear",
                border: 0}}
                  href="https://github.com/Arquisoft/radarin_es1b"
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Nuestro proyecto
                </a>{' '}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{ fontWeight: 800, fontFamily: 'sans-serif' , marginBottom: "0.5em"}}>
              ¿QUÍENES SOMOS?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{ marginBottom: "1em"}}>
             Somos el grupo ES1B de la asignatura de Arquitectura Software para la web del curso 2021 de la Universidad de Oviedo. 
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={fotos[index]}
                    title="Image title"
                    style={{translateY:"50%"}}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {nombres[index]}
                    </Typography>
                    <Typography>
                     Programador Junior
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Contacto
        </Typography>
        <a variant="subtitle1" align="center" color="textSecondary" component="p" href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
           asw2021es1b@gmail.com
        </a>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
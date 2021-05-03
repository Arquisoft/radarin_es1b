import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useProfile from '../components/profile/useProfile';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: "#6DDFE7"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter(props) {
  const web = props.webId
  const usuario = props.usuario
  const classes = useStyles();
  const profile = useProfile(web);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
         
         <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap" , justifyContent: "center"}}>
         
         <img src="/img/about.png" alt="logo"  style={{marginBottom: "1em"}}/>
         {(usuario==="1") ? 
         <Typography variant="h4" component="h1" style={{marginBottom: "0.5em" , fontFamily: 'sans-serif', fontWeight: 800}}>
          BIENVENIDO A RADARIN
        </Typography> :  <Typography variant="h4" component="h1" style={{marginBottom: "0.5em" , fontFamily: 'sans-serif', fontWeight: 800}}>
          BIENVENIDO ADMINISTRADOR
        </Typography>} 
        
        <Typography variant="h5" component="h3" style={{textTransform: "uppercase" , fontFamily: 'sans-serif', fontWeight: 700}}>
         {(profile.fullName!=undefined) ? ""+profile.fullName : "Cargando..."}
        </Typography>
         
        </div>
      </Container>
    </div>
  );
}
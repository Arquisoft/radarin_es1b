import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  div: {
    display: "block"
  },
  intro: {
    background: 'rgba(0,0,0,0.2)',
    display: "table",
    width: "100%",
    padding: 0,
    backgroundImage:'url("../img/intro-bg.jpg")',
    backgroundColor: "#e5e5e5",
    backgroundSize: "cover",
    paddingTop: "350px",
    paddingBottom: "200px",
    textAlign: "center"


  },
  overlay:{
   
  },
  container:{
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  row:{
    marginRight: "-15pcx",
    marginLeft: '-15px',
  },
  col:{

    marginleft: "16.66666667%"

  },
  md:{

    position: "relative",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",

  },
  introtext:{
    
  },
  h1:{

    variant: "h1",
    color: "#000000",
    fontsize: "200px",
    fontweight: "bold",
    texttransform: "uppercase",
    margintop: 0,
    marginbottom: "5px"

  }
  

}));


export const Header = (props) => {
  const classes = useStyles();
  return (
    <header id='header'>
      <div className={classes.intro}>
        <div className={classes.overlay}>
          <div className={classes.container}>
            <div className={classes.row}>
              <div className={classes.col ,classes.md ,classes.introtext}>
                <Typography  variant="h3" align="center"  style={{fontWeight: 900, marginBottom: "5px",  fontFamily: 'sans-serif'}} >
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
               </Typography>
               <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap" , justifyContent: "center"}}>
                 <Typography  variant="p" align="center"  style={{fontWeight: 900, marginBottom: "5px", fontSize: "1em", fontFamily: 'sans-serif'}} >
                  ENCONTRAR A TUS AMIGOS  
                  <span></span>
               </Typography>
               <Typography  variant="p" align="center"  style={{fontWeight: 900, marginBottom: "5px", fontSize: "1em", fontFamily: 'sans-serif', paddingLeft: "0.5em"}} >
                  NUNCA FUE TAN FACIL
                  <span></span>
               </Typography>
               </div>
                {/* <a style={{fontFamily: 'sans-serif', textTransform: "uppercase", color: "#FFF", backgroundColor: "#5ca9fb",  backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)", padding: "14px 34px", letterSpacing: "1px",margin: 0, 
                fontSize: "15px",
                fontWeight: 500,
                borderRadius: "25px",
                transition: "all 0.5s linear",
                border: 0}}
                  href="https://solidcommunity.net/register"
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Crear cuenta SOLID
                </a>{' '} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

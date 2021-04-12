import React, {useContext} from 'react';
import { LocationsContext } from '../../context/LocationsContext';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    details: {

      alignItems: 'center',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
  
  export default function MeetsMenu() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(true);

    const { seeFriends, setSeeFriends } = useContext(LocationsContext);
    const { seeMeets, setSeeMeets } = useContext(LocationsContext);
    
    const handleClick = () => {
      setOpen(!open);
    };
    
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };


  const handleCheckChange = (event) => {
    setSeeFriends(event.target.checked);
  };
  
    return (
      
      <div className={classes.root}>
        <Button  onClick={handleClick} color="primary">
          Ajustes del mapa
        </Button>
        <Collapse in={open} timeout="auto" unmountOnExit>  
        <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Mi localización</Typography>
              <Typography className={classes.secondaryHeading}>Mostrar mi ubicación<Checkbox
                checked={seeFriends}
                onChange={handleCheckChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>Actualizar ubicación
                <Button
                    checked={seeFriends}
                    onChange={handleClick}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
              </Typography>
            </AccordionDetails>
          </Accordion>        
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Amigos</Typography>
              <Typography className={classes.secondaryHeading}>Mostrar amigos<Checkbox
                checked={seeFriends}
                onChange={handleCheckChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Meets</Typography>
              <Typography className={classes.secondaryHeading}>Mostrar meets
                <Checkbox
                  checked={seeMeets}
                  onChange={handleCheckChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Crear nuevo meet 
                <Checkbox
                    checked={seeFriends}
                    onChange={handleCheckChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Collapse>
      </div>
    );
  }
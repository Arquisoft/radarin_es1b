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
  
  export default function MeetsMenu(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(true);

    const { seeFriends, setSeeFriends } = useContext(LocationsContext);
    const { seeMeets, setSeeMeets } = useContext(LocationsContext);
    const { createMeet, setCreateMeet} = useContext(LocationsContext);
    
    const handleClick = () => {
      setOpen(!open);
    };
    
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };


    const handleCheckChange = (event) => {
      setSeeFriends(event.target.checked);
    };
    const handleCheckSeeMeet = (event) => {
      setSeeMeets(event.target.checked);
    };
    const handleCheckCreateMeet = (event) => {
      setCreateMeet(event.target.checked);
    };
  
    return (
      
      <div className={classes.root}>
        <div style = {{ display: "flex", justifyContent: "left" }}>
          <Button onClick={handleClick} color="primary">
            Ajustes del mapa
          </Button>
        </div>
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
                onChange={props.saveUserLocation}
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
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Meets</Typography>
              <Typography className={classes.secondaryHeading}>
                <Checkbox
                  checked={seeMeets}
                  onChange={handleCheckSeeMeet}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                Mostrar meets
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <Checkbox
                    checked={createMeet}
                    onChange={handleCheckCreateMeet}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                Crear nuevo meet   
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            </AccordionDetails>
          </Accordion>
        </Collapse>
      </div>
    );
  }
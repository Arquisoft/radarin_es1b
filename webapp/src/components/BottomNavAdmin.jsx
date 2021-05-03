import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PeopleIcon from '@material-ui/icons/People';
import Users from './admin/Users';
import Home from '@material-ui/icons/Home'
import StartPage from '../routes/StartPage';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});



const BottomNav = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const handleChange = async (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Switch>
        <Route path="/users">
          <Users webId={props.webId}/>
        </Route>
        <Route path="/profile*">
        </Route>
        <Route path="/">
          <StartPage webId = {props.webId} usuario ={props.user} />
        </Route>
      </Switch>
      <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root} style={{ width: '100%', height: 'auto' }}>
        <BottomNavigationAction component={Link} to="/" label="Inicio" value="" icon={<Home/>}/>
        <BottomNavigationAction component={Link} to="/users" label="Usuarios" value="users" icon={<PeopleIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav

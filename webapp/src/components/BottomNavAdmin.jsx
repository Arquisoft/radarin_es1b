import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DvrIcon from '@material-ui/icons/Dvr';
import MapIcon from '@material-ui/icons/Map';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import Map from './map/Map';
import Monitor from './admin/Monitor';
import Settings from './admin/Settings';
import Users from './admin/Users';
import Start from '../routes/StartPage';
import Home from '@material-ui/icons/Home'
import Profile from './profile';
import StartPageAdmin from '../routes/StartPageAdmin';
import SettingsIcon from '@material-ui/icons/Settings';

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
          <Users/>
        </Route>
        <Route path="/delete*">
          <Users/>
        </Route>
        <Route path="/profile*">
           
        </Route>
        <Route path="/monitor">
          <Monitor/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
        <Route path="/">
          <StartPageAdmin/>
        </Route>
      </Switch>
      <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root} style={{ width: '100%', height: 'auto' }}>
        <BottomNavigationAction component={Link} to="/" label="Inicio" value="" icon={<Home/>}/>
        <BottomNavigationAction component={Link} to="/users" label="Usuarios" value="users" icon={<PeopleIcon />} />
        <BottomNavigationAction component={Link} to="/monitor" label="Monitorizacion" value="monitor" icon={<DvrIcon />} />
        <BottomNavigationAction component={Link} to="/settings" label="Ajustes" value="settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav

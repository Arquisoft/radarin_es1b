import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Login from './login';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popover from '@material-ui/core/Popover';
import Button from "react-bootstrap/Button";
import NotificationContainer from './notifications/NotificationContainer';


import { nearFriends, getFriends } from '../api/api';
import { useWebId } from "@solid/react";


toast.configure();


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  }
}));

export default function RadarinAppBar() {
  const classes = useStyles();

  const [amigo, setAmigo] = React.useState([])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const loggedUserId = useWebId();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAmigo([]);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    const interval = setInterval(() => {
      nearbyFriends();
    }, 10000);
    return () => clearInterval(interval);
  })

  async function nearbyFriends() {
    let friends = []
    await getFriends(loggedUserId).then((result) => {
      result.forEach((e) => {
        friends.push(e)
        console.log("Amigo " + e)
      })
    })
    console.log("Amigos " + friends)
    var msg = await nearFriends(friends, loggedUserId)
    if (msg !== "No nearby user") {
      amigo.push(msg);
      toast(msg);
    }
    console.log("Mensaje" + msg)
  }

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title} align="left">
            {/* Typography da formato al texto*/}
            <Typography align="left" className={classes.title} variant="h5" color="inherit" noWrap> Radarin </Typography>
          </div>
          <Button className="notification-button" onClick={handleClick}><img
            src="noti.png"
            width="25"
            height="25"
            className="d-inline-block align-top"
            alt="notificacion"
          />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <ul>
              <NotificationContainer notif={amigo} />
            </ul>
          </Popover>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <Login />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}
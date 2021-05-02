import React, { useEffect, useState } from 'react';
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


import { notifyPetition, getPendingFriends, nearFriends, getFriends } from '../api/api';
import { useWebId } from "@solid/react";
import useProfile from './profile/useProfile';
//import { notify } from '../../../restapi/api';


toast.configure();


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  },

  toast: {
    background: "#3f51b5",
    border: "0.25em solid black"
  },

  links: {
    color: "#80aaff",
    "&:hover": {
      textDecoration: "none",
      color: "#80aaff"
    }
  }
}));

export default function RadarinAppBar() {
  const classes = useStyles();
  const toastCloseTime = 2000;
  const [amigo, setAmigo] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);
  const loggedUserId = useWebId();
  const [amigosNotificados, setAmigosNotificados] = useState([]);
  const [amigosPendientesNotificados, setAmigosPendientesNotificados] = useState([]);
  const [notIcon, setNotIcon] = useState("noti.png");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAmigo([]);
    setNotIcon("noti.png")
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    const interval = setInterval(() => {
      nearbyFriends();
      notifyFriendPetition();
    }, 5000);
    return () => clearInterval(interval);
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setAmigosNotificados([]);
      setAmigosPendientesNotificados([]);
    }, 900000);
    return () => clearInterval(interval);
  })

  async function nearbyFriends() {
    let friends = []
    getFriends(loggedUserId).then((result) => {
      result.forEach((e) => {
        friends.push(e)
      })
      friends.forEach(async (f) => {
        if (!amigosNotificados.includes(f)) {
          var msg = await nearFriends(f, loggedUserId)
          if (msg !== "No nearby user") {
            amigo.push(msg + " está cerca de ti!");
            toast.info(msg + " está cerca de ti!", {
              autoClose: toastCloseTime,
              className: classes.toast
            });
            amigosNotificados.push(f);
            setNotIcon("notified.png")
          }
        }
      })
    })
  }

  async function notifyFriendPetition() {
    let friends = []
    getPendingFriends(loggedUserId).then((result) => {
      result.forEach((e) => {
        friends.push(e)
      })
      friends.forEach(async (f) => {
        if (!amigosPendientesNotificados.includes(f)) {
          var friend = await notifyPetition(f, loggedUserId)
          if (friend !== "No hay nuevas solicitudes") {
            amigo.push(<div><a className={classes.links} href={'/#/profile?webId=' + encodeURIComponent(friend.webId)}> {friend.nombre}</a> te ha enviado una solicitud de amistad!</div>)
            toast.info(friend.nombre + " te ha enviado una solicitud de amistad!", {
              autoClose: toastCloseTime,
              className: classes.toast
            });
            amigosPendientesNotificados.push(f);
            setNotIcon("notified.png")
          }
        }
      })
    })
  }

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title} align="left">
            {/* Typography da formato al texto*/}
            <Typography align="left" className={classes.title} variant="h5" color="inherit" noWrap> Radarin </Typography>
          </div>
          <Button className="notification-button" onClick={handleClick} color="primary" variant="contained"><img
            src={notIcon}
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
            <div class="notfications-container">
              <NotificationContainer notif={amigo} />
            </div>
          </Popover>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <Login />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}
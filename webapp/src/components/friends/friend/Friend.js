import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import styles from './Friend.module.css';

import { toProfile } from '../../../routing';
import Image from "../../profile/Image";
import { Button } from "@material-ui/core";


import { acceptPendingFor } from '../../../api/api'

function acceptfriends(loggedUserWebID,webId) {
  acceptPendingFor(loggedUserWebID, webId)
  //.then(res=>{console.log(res)})
}


//Amigo del usuario SOLID
const Friend = ({ webId, fullName, imageSrc,loggedUser }) =>
  <div>
    
    <ListItem className={styles.friend} button component={Link} to={toProfile(webId)}>

      <ListItemIcon>
        <Image className={styles.avatar} fullName={fullName} src={imageSrc} />
      </ListItemIcon>
      <ListItemText
        primary={fullName}
        secondary={webId}
      >

      </ListItemText>

    </ListItem>
    <Button onClick={()=>{acceptfriends(loggedUser, webId)}}> Aceptar!</Button>
  </div>

export default Friend

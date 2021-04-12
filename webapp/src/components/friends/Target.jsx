import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {Link} from 'react-router-dom';

import styles from '../friendList/friend/Friend.module.css';

import {toProfile} from '../../routing';
import Image from "../profile/Image";
import { Button } from "@material-ui/core";
import { acceptFriend } from '../../api/api';

//Amigo del usuario SOLID
export default ({webId, fullName, imageSrc, mywebId}) =>
  <ListItem className={styles.friend} button component={Link} to={toProfile(webId)}>
    <ListItemIcon>
      <Image className={styles.avatar} fullName={fullName} src={imageSrc}/>
    </ListItemIcon>
    <ListItemText
        primary={fullName}
        secondary={webId}
    />
    <ListItemSecondaryAction>
            <Button id="añadirFriend" type="button" onClick={(e) => acceptFriend(mywebId,webId)}>
							Buscar
						</Button>
            </ListItemSecondaryAction>
  </ListItem>

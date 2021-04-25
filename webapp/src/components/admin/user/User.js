import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from './Friend.module.css';

import {toDelete} from '../../../routing';
import Image from "../../profile/Image";


//Amigo del usuario SOLID
const Friend = ({webId, fullName, imageSrc}) =>
  <ListItem className={styles.friend} button component={Link} to={toDelete(webId)} clickable>
    <ListItemIcon>
      <Image className={styles.avatar} fullName={fullName} src={imageSrc}/>
    </ListItemIcon>
    <ListItemText
        primary={fullName}
        secondary={webId}
    />
   <Button id="searchFriends" type="button">
							Eliminar
	 </Button>
  </ListItem>
  

export default Friend 
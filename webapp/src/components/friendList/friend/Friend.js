import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import styles from './Friend.module.css';

import {toProfile} from '../../../routing';
import Image from "../../profile/Image";

//Amigo del usuario SOLID
const Friend = ({webId, fullName, imageSrc}) =>
  <ListItem className={styles.friend} button component={Link} to={toProfile(webId)} clickable>
    <ListItemIcon>
      <Image className={styles.avatar} fullName={fullName} src={imageSrc}/>
    </ListItemIcon>
    <ListItemText
        primary={fullName}
        secondary={webId}
    />
  </ListItem>

export default Friend 
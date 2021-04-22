import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './Friend.module.css';

import Image from "../../../profile/Image";


//Amigo del usuario SOLID
const Friend = ({ webId, fullName, imageSrc,onClickFunction }) =>
  <div>
    
    <ListItem className={styles.friend} button onClick={onClickFunction(webId, fullName)}>

      <ListItemIcon>
        <Image className={styles.avatar} fullName={fullName} src={imageSrc} />
      </ListItemIcon>
      <ListItemText
        primary={fullName}
        secondary={webId}
      >

      </ListItemText>

    </ListItem>
  </div>

export default Friend

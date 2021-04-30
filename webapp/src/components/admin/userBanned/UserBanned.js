import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from './Friend.module.css';
import {banUser} from '../../../api/api'
import Image from "../../profile/Image";
import HowToRegIcon from '@material-ui/icons/HowToReg';


function UserBan({ webId, fullName, imageSrc}) {

  function ChangeTarget(){
    console.log("baneadooo")
    banUser(webId, "false")
  }

  return (
    <div>
      <ListItem className={styles.friend} button>
    <ListItemIcon>
      <Image className={styles.avatar} fullName={fullName} src={imageSrc}/>
    </ListItemIcon>
    <ListItemText
        primary={fullName}
       
    />
   <Button onClick = {ChangeTarget} id="searchFriends" type="button" color="primary" variant="outlined" size="small"  startIcon={<HowToRegIcon />}>
							unban
	 </Button>
  </ListItem>
    </div>
  )
}

export default UserBan 
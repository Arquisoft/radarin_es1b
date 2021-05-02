import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import styles from './Friend.module.css';
import Image from "../../profile/Image";
import {makeAdmin} from "../../../api/api";
import PersonAddIcon from '@material-ui/icons/PersonAdd';


function NewUserAdmin({ webId, fullName, imageSrc}) {

  function ChangeTarget(){
    makeAdmin(webId, "true")
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
   <Button onClick = {ChangeTarget} id="searchFriends" type="button" color="primary" variant="outlined" size="small" startIcon={<PersonAddIcon />}>
							add
	 </Button>
  </ListItem>
    </div>
  )
}

export default NewUserAdmin 
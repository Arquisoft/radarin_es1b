import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import styles from './Friend.module.css';
import {makeAdmin} from '../../../api/api'
import Image from "../../profile/Image";
import DeleteIcon from '@material-ui/icons/Delete';


function DeleteAdmin({ webId, fullName, imageSrc}) {

  function ChangeTarget(){
    makeAdmin(webId,"false")
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
    {(webId!= "https://asw2021es1b.solidcommunity.net/profile/card#me") ? <Button onClick = {ChangeTarget} id="searchFriends" type="button" color="primary" variant="outlined" size="small"  startIcon={<DeleteIcon />}>
		delete
	 </Button> : null}
   
  </ListItem>
    </div>
  )
}

export default DeleteAdmin 
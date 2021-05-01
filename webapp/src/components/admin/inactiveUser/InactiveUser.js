import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './Friend.module.css';
import Image from "../../profile/Image";
import {getLastTimeUser} from "../../../api/api";



function InactiveUser({ webId, fullName, imageSrc}) {

  function ChangeTarget(){
    console.log("entro aqui")
    var promise = getLastTimeUser(webId)
    promise.then((result) =>{
      result.forEach((e) => {
        
         
      })
    }) 
    
    return <p>hola</p>
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
    {/* {ChangeTarget()} */}
  </ListItem>
    </div>
  )
}

export default InactiveUser 
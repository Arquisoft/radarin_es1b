import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './Friend.module.css';

import Image from "../../../profile/Image";



function ChatFriend({ webId, fullName, imageSrc, onClickFunction }) {

  function ChangeTarget(){
    onClickFunction(webId, fullName, imageSrc)
  }

  return (
    <div>
      <ListItem className={styles.friend} button onClick={ChangeTarget}>
        <ListItemIcon>
          <Image className={styles.avatar} fullName={fullName} src={imageSrc} />
        </ListItemIcon>

        <ListItemText
          primary={fullName}
          />
      </ListItem>
    </div>
  )
}

export default ChatFriend



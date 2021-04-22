
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ChatList from './ChatsList';
import {addMsg, getMessages} from '../../../api/api'
import Messages from './Messages';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '65vh',
    overflowY: 'auto'
  }
});

const Chat = (props) => {
    const classes = useStyles();

    const [target, setTarget] = useState(null)
    

    function Set(newWebId) {
        setTarget(newWebId)
        getMessages(props.webId, newWebId)
    }

    



  return (
      <div>

      {console.log("rendering amigossss")}
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />
                <ChatList webId={props.webId}
                            onClickFunction={Set}/>
            </Grid>
            <Grid item xs={9}>
                {target?
                <Messages 
                    webId={props.webId}
                    target={target}
                    />:null}
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;
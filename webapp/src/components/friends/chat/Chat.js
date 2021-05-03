
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {getMessages} from '../../../api/api'
import Messages from './Messages';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '100vh'
  },
  chatContainer: {
    width: '100%',
    height: '100vh', 
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
    const [targetName, setTargetName] = useState(null)
    const [targetImg, setTargetImg] = useState(null)
    const [update, setUpdate] = useState(true)
    

    function Set(newWebId, name, img) {
        setTarget(newWebId)
        setTargetName(name)
        setTargetImg(img)
        getMessages(props.webId, newWebId)
        setUpdate(!update)
    }

    function Back(){
      setUpdate(!update)
    }

    



  return (
      <div className={classes.chatContainer}>
      {update?
        <ChatList webId={props.webId}
                  onClickFunction={Set}
                  backFunc={props.backFunc}
                  />
        :
        target? <Messages 
          webId={props.webId}
          target={target}
          fullName={targetName? targetName : undefined}
          imageSrc={targetImg ? targetImg : undefined}
          backFunc={Back}
        />:null
      }                  
        
      </div>
  );
}

export default Chat;

/*
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
                
            </Grid>
            <Grid item xs={9}>
                {target?
                <Messages 
                    webId={props.webId}
                    target={target}
                    />:null}
            </Grid>
        </Grid>*/
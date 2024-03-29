import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import {addMsg, getMessages} from '../../../api/api'
import SingleMsg from './SingleMsg';
import InfiniteScroll from 'react-infinite-scroll-component';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';

import Image from "../../profile/Image";

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
      height: '80vh',
      overflowY: 'auto'
    }
    
  });


function Messages(props) {
    const classes = useStyles();
    const msg = useRef()
    const [msgsList, setMsgsList] = useState([])
    const [update, setUpdate] = useState(false)

    function SendMessage(){
        if(props.target)
            addMsg(
                props.webId,
                props.target,
                msg.current.value
            )
            setUpdate(!update)
        msg.current.value=""   
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 3000);
        return () => clearInterval(interval);
      }, [update]);

    async function fetchData() {       
 
        getMessages(props.webId, props.target).then((result) => {
            setMsgsList([])
          result.forEach((e) => {
            setMsgsList(msgsList => [...msgsList, e]);
          })          
          //setUpdate(!update)
        })
      }

    

      
    //<SingleMsg webId={props.webId} msg={msg} />
    return (
        <div>
            <Grid container style={{padding: '20px'}}>
                <Grid xs={1} align="left">
                    <ArrowBackIcon onClick={props.backFunc} color="black" aria-label="add"/>
                </Grid>

                <Grid item xs={11}>
                    <ListItem>
                        <ListItemIcon>
                            <Image fullName={props.fullName} src={props.imageSrc} />
                        </ListItemIcon>

                        <ListItemText
                            primary={props.fullName}
                        />
                    </ListItem>
                </Grid>
            </Grid>
            <List className={classes.chatList}>
                <InfiniteScroll
                    style={{ display: 'flex', flexDirection: 'column-reverse' }}
                    dataLength={msgsList.length}
                    loader={<h4>Cargando...</h4>}
                    height={400}
                    inverse={true}
                    >
                    
                    {msgsList.map((msg, index) => {
                        return(<SingleMsg webId={props.webId} msg={msg} index={index} />)
                    })}


                </InfiniteScroll>

            </List>
            {/* <Divider /> */}
            <Grid container spacing="5" style={{padding: '20px', position: 'absolute', bottom: 0 }}>
                <Grid item xs={11}>
                    <TextField
                        id="outlined-basic-email" 
                        placeholder="Escribe el mensaje"
                        inputRef={msg} fullWidth />
                </Grid>
                <Grid xs={1} align="right">
                    <Fab onClick={SendMessage} color="primary" aria-label="add"><SendIcon /></Fab>
                </Grid>
            </Grid>
        </div>
    )
}

export default Messages

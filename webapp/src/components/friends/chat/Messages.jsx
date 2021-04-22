import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import {addMsg, getMessages} from '../../../api/api'
import SingleMsg from './SingleMsg';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    const [msgs, setMsgs] = useState([])
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
        fetchData()
    }, [update])

    async function fetchData() {
        var promise = getMessages(props.webId, props.target)
    
        .then((result) => {
          result.forEach((e) => {
            setMsgs([...msgs, e]);
          })
        })
        console.log(msgs)
      }

      
    //<SingleMsg webId={props.webId} msg={msg} />
    return (
        <div>
            <List >
                <InfiniteScroll
                    className={classes.messageArea}
                    dataLength={msgs.length}
                    loader={<h4>Cargando...</h4>}
                    height={20}
                    >

                    {msgs.map((msg, index) => {
                        return(<SingleMsg webId={props.webId} msg={msg} index={index} />)
                    })}

                </InfiniteScroll>
            </List>
            <Divider />
            <Grid container style={{padding: '20px'}}>
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

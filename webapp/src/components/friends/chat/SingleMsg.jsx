import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

function SingleMsg(props) {
    return (
            <ListItem key={props.index+1}>
                <Grid container>
                    <Grid item xs={12}>
                        <ListItemText align={props.msg.from==props.webId?"right":"left"} primary={props.msg.msg}></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText align={props.msg.from==props.webId?"right":"left"} secondary={props.msg.time}></ListItemText>
                    </Grid>
                </Grid>
            </ListItem>   
    )
}

export default SingleMsg

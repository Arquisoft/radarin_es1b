import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

function SingleMsg(props) {
    let d = new Date(props.msg.time);
    let formatted = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
    return (
            <ListItem key={props.index+1}>
                <Grid container>
                    <Grid item xs={12}>
                        <ListItemText align={props.msg.from===props.webId?"right":"left"} primary={props.msg.msg}></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText align={props.msg.from===props.webId?"right":"left"} secondary={formatted}></ListItemText>
                    </Grid>
                </Grid>
            </ListItem>   
    )
}

export default SingleMsg

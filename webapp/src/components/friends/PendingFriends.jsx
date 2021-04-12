import React from 'react'
import { getPendingFriends } from '../../api/api';
import List from './List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

import styles from "../profile/Profile.module.css";
class PendingFriends extends React.Component {

    constructor(webId) {
        super();
        this.webID = webId;
        this.state = {
            friends: [],
        };
        this.pendingFriend();
    }
    
    pendingFriend(){
        /**
        getPendingFriends(this.webID).then(res => {
            this.setState({ friends: res.slice(0, 1000)});
        })
        */
        this.setState({ friends:[]} );
        console.log(this.state.friends)
        getPendingFriends(this.webID).then((result)=>{
            result.map((e) =>{ 
                this.state.friends.push(e)
            })
           
          });
          console.log("pending")
          console.log(this.state.friends)

    }

    render() {
        return (   
             <Grid container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography variant="h6" component="h4">
                Solicitudes pendientes de aceptar:
                  </Typography>
              {/* Muestra la lista de amigos del usuario accediendo al index.js de /friendlist*/}
              <Paper elevation={1}>
              <List friends={ this.state.friends} webId={this.webID}/>
              </Paper>
            </Grid>
          </Grid>         
           
        );
    }   
}

export default PendingFriends
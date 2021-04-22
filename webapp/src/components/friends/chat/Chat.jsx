import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";

import ChatList from './ChatsList'
import styles from "../../profile/Profile.module.css";
import Messages from './Messages';

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.webId=props.webId
        this.state={
            isToggled: true,
            chatWith: null,
            friendName: null
        }
    }

    handleClick(webIdSelected, friendName) {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled,
            chatWith: webIdSelected,
            friendName: friendName
          }));
    }

    render() {
        return this.state.isToggled?
        
        (
            <div>
                <Typography variant="h6" component="h4">
                    Lista de chats:
                </Typography>
                <Paper className={styles.friendList} elevation={1}>
                    <ChatList 
                        webId={this.webId}
                        onClickFunction={this.handleClick}
                    />
                </Paper>
            </div>
        )
        :
        (
            <div>
                <Typography variant="h6" component="h4">
                    Chaat:
                </Typography>
                <Messages 
                    webId={this.webId}
                    friendWebId={this.state.chatWith}
                    friendName={this.state.friendName}
                    onClickFunction={this.handleClick}
                 />
            </div>
        )
    }
}

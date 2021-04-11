import React, { useState } from 'react';
import { addFriend, removeFriend, getFriendShip } from '../../api/api';
import { Button } from '@material-ui/core';
import friend from '../friendList/friend';




class ButtonAddDelete extends React.Component {

    constructor(props) {
        super(props);
        this.loggedUser = props.loggedUser;
        this.webId = props.webId;
        console.log("Nuevo perfil (Constructor): " + this.loggedUser + "; " + this.webId)
        this.isFriend = this.checkFriend();
        this.state={
            text:""
        }
        
    }

    componentDidUpdate(props) {
        this.loggedUser = props.loggedUser;
        this.webId = props.webId;
        console.log("Nuevo perfil (Update): " + this.loggedUser + "; " + this.webId)
        this.isFriend = this.checkFriend();
    }

    addFriendship(loggedUser, webId) {
        addFriend(loggedUser, webId)
    }
    removeFriendship(loggedUser, webId) {
        removeFriend(loggedUser, webId);
    }
    handleClick(e) {
        this.onClick();
    }


    
    checkFriend() {
        console.log("Comprobando amistad de " + this.loggedUser + " y " + this.webId)
        let aux = getFriendShip(this.loggedUser, this.webId).then(friendship => { return friendship; })

        return aux;
    }

    onClick() {
        let value = this.isFriend.then(val => val)
        console.log("Display:" + value)
        let ret = this.checkFriend().then(
            friendship => {
                if(friendship === null){
                    this.addFriendship(this.loggedUser, this.webId);
                }
                else if (friendship.status !== "accepted") {
                    this.removeFriendship(this.loggedUser, this.webId);
                } else {
                    
                }
            }
        )
    }

    displayText() {
        let toRet = "";
        let ret = this.checkFriend().then(
            friendship => {
                let text="";
                if (friendship === null) {
                    console.log("Añadir amigo");
                     text="Añadir amigo"
                   
                    
                }
                else  /*(friendship.status === "accepted")*/ {
                    console.log("Eliminar amigo");
                     text = "Eliminar amigo";
                }

                this.setState({
                    text
                })
                //console.log(friendship.status);
            }
        )




    }

    render() {
        {this.displayText()}
        return <Button onClick={this.handleClick.bind(this)}> {this.text} </Button>
    }
}
export default ButtonAddDelete;
/* 

auxmethond(friendship) {
    console.log(friendship)
    if (friendship == null) {
        console.log("No son amigos")
        return false;
    }
    console.log("Resultado de checkear amistad:" + friendship.status)

    if (friendship.status == "accepted") {
        return true;
    }
    return false;
}
 */
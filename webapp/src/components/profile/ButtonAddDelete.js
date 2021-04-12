import React, { useState } from 'react';
import { addFriend, removeFriend, getFriendShip } from '../../api/api';
import { Button } from '@material-ui/core';
import friend from '../friendList/friend';
import Prueba from './ButtonAddOrDelete';




class ButtonAddDelete extends React.Component {

    constructor(props) {
        super(props);
        this.loggedUser = props.loggedUser;
        this.webId = props.webId;
        //console.log("Nuevo perfil (Constructor): " + this.loggedUser + "; " + this.webId)

        this.text = "";
        this.displayText()
        this.render()
    }

    componentDidUpdate(props) {
        this.loggedUser = props.loggedUser;
        this.webId = props.webId;
        this.displayText()
        this.render()
    }

    

    addFriendship(loggedUser, webId) {
        addFriend(loggedUser, webId);
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
        let ret = this.checkFriend().then(
            friendship => {
                if (friendship === null) {
                    this.addFriendship(this.loggedUser, this.webId);
                }
                else if (friendship.status !== "accepted") {
                    this.removeFriendship(this.loggedUser, this.webId);
                } else {
                    this.removeFriendship(this.loggedUser, this.webId);
                }
            }
        ).then(this.forceUpdate());

    }

    displayText() {
        let toRet = "";
        let ret = this.checkFriend().then(
            friendship => {
                if (friendship === null) {
                    this.text = "Añadir amigo"
                    console.log("No son amigos")
                    

                }
                else  /*(friendship.status === "accepted")*/ {
                    
                    this.text = "Eliminar amigo";
                    console.log("Son amigos")
                    
                }


            }
        )
    }

    render() {
        {/*this.displayText()*/ }
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
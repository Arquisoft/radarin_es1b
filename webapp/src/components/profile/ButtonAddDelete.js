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
        //this.displayText()
        //this.text = "";
        this.previousWebId=this.webId;
        this.displayText()
        //this.componentDidUpdate(props);
    }

    componentDidUpdate(props) {
        this.loggedUser = props.loggedUser;
        this.webId = props.webId;
        if( this.webId!==this.previousWebId){
            this.previousWebId=this.webId;
            this.displayText()
        }      
        
    }

    addFriendship(loggedUser, webId) {

        addFriend(loggedUser, webId).then(res=> {this.displayText()});
    }

    removeFriendship(loggedUser, webId) {
        removeFriend(loggedUser, webId).then(res=> {this.displayText()});
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
                    
                    return this.addFriendship(this.loggedUser, this.webId);                    
                }
                else {
                    return this.removeFriendship(this.loggedUser, this.webId);
                }
                
                
               
            }

        );

        return ret;

    }

    updateComponent(){
        this.forceUpdate();
        this.render();
    }

    displayText() {
        let ret = this.checkFriend().then(
            friendship => {
                if (friendship === null) {
                    this.text = "Añadir amigo"
                    
                }
                else if(friendship.status==="pending")
                    {this.text="Solicitud enviada (Deshacer)"}
                else  /*(friendship.status === "accepted")*/ {
                    this.text = "Eliminar amigo";                    
                }
                this.updateComponent()
                //this.toUpdate=true;
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
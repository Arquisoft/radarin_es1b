import React, { useState } from 'react';
import { addFriend, removeFriend, getFriendShip,acceptPendingFor } from '../../api/api';
import { Button } from '@material-ui/core';
import friend from '../friendList/friend';
import Prueba from './ButtonAddOrDelete';




class ButtonAddDelete extends React.Component {

    constructor(props) {
        super(props);
        this.loggedUser = props.loggedUser;
        this.webId = props.webId;
        this.previousWebId=this.webId;
        this.displayText()
        
    }

    componentDidUpdate(props) {
        this.loggedUser = props.loggedUser;
        this.webId = props.webId;
        
        if( this.webId!==this.previousWebId){
            this.previousWebId=this.webId;
            this.displayText()
        }      
        
    }


    componentDidMount(){
        this.displayText();
    }

    handleClick(e) {
        this.onClick();       
    }

    checkFriend() {
    
        let aux = getFriendShip(this.loggedUser, this.webId).then(friendship => { return friendship; })
        return aux;
    } 

    onClick() {
        let ret = this.checkFriend().then(
            friendship => {
                
                if (friendship === null) {
                    return addFriend(this.loggedUser, this.webId).then(res=> {
                        this.displayText();
                    });
                                  
                }
                if(friendship.status==="pending" && friendship.requester===this.webId){
                    return acceptPendingFor(this.loggedUser,this.webId).then(res=> {
                        this.displayText();
                    });
                }
                else {
                    return removeFriend(this.loggedUser, this.webId).then(res=> {
                        this.displayText()
                    });
                    
                }
            }
        );

        return ret;

    }

    updateComponent(){
        
        this.render();
    }

    displayText() {
        let ret = this.checkFriend().then(
            friendship => {
                if (friendship === null) {
                    this.text = "Añadir amigo"
                    
                }
                else if(friendship.status==="pending" && friendship.requester===this.webId){
                    this.text="Aceptar Solicitud"
                }
                else if(friendship.status==="pending")
                    {this.text="Solicitud enviada (Deshacer)"}
                else  /*(friendship.status === "accepted")*/ {
                    this.text = "Eliminar amigo";                    
                }
                this.updateComponent()
                this.forceUpdate();
                //this.toUpdate=true;
            }
        )

    }

    render() {        
        return <Button onClick={this.handleClick.bind(this)}> {this.text} </Button>
    }
}
export default ButtonAddDelete;

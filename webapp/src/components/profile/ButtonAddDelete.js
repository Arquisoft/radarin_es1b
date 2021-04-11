import React, { useState } from 'react';
import {addFriend, removeFriend, getFriendShip} from '../../api/api';
import { Button } from '@material-ui/core';


async function checkFriend(loggedUser , webId)  {
    console.log("Comprobando amistad de "+loggedUser+" y "+webId)
    let aux= getFriendShip(loggedUser , webId).then(friendship=>{return auxmethond(friendship).then(aux=>{return aux} )})
    
    return  aux;
}




async function auxmethond(friendship){
    console.log(friendship)
    if(friendship==null){
        console.log("No son amigos")
        return false;
    }
    console.log("Resultado de checkear amistad:" + friendship.status)
    
    if(await friendship.status=="accepted"){
        console.log("Son amigos")
        return true;
    }
    console.log("No son amigos2")

    return false;
}

class ButtonAddDelete extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            loggedUser:props.loggedUser,
            webId : props.webId,
            isFriend: ""
        }
        console.log("Nuevo perfil (Constructor): "+this.state.loggedUser+"; "+this.state.webId) 
        const fetchFriendShip=async()=>{
            const response= await  checkFriend(this.state.loggedUser, this.state.webId);  
            const {isFriend  }= await response;
            this.setState({
                isFriend
            })
        }
        fetchFriendShip();
        
        
           
        
      }

    addFriendship(loggedUser, webId) {
        addFriend(loggedUser, webId)
    }

    componentDidUpdate(props){
        let loggedUser=props.loggedUser;
        let webId = props.webId;
        this.setState({
            loggedUser,
            webId
        })
        console.log("Nuevo perfil (Update): "+this.state.loggedUser+"; "+this.state.webId)
        const fetchFriendShip=async()=>{
            const response= await  checkFriend(this.state.loggedUser, this.state.webId);  
            const {isFriend  }= await response;
            this.setState({
                isFriend
            })
        }
        fetchFriendShip();
       
            
            
    } 
    

    removeFriendship(loggedUser, webId) {
        removeFriend(loggedUser, webId);
    }

    handleClick(e) {
        this.onClick();
    }    

    onClick(){
        let value= this.state.isFriend
        if(value){
            this.removeFriendship(this.state.loggedUser, this.state.webId);
        }
        else{
            this.addFriendship(this.state.loggedUser, this.state.webId);
        }

    }

    displayText(){
        let value= this.state.isFriend;
        if(value){
            return "Eliminar amigo";
        }
        return "Añadir amigo" 
    }

    render() {
        return <div ><Button onClick={this.handleClick.bind(this)}> {this.displayText()}</Button> </div>
    }
}
export default ButtonAddDelete;
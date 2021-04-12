import React, { useState } from 'react';

import { useLDflexList, useLDflex } from '@solid/react';

import { Button } from '@material-ui/core';

import {addFriend, removeFriend, getFriendShip} from '../../api/api';



function addFriendship(loggedUser,webId)  {
        addFriend(loggedUser,webId)
}

function removeFriendship(loggedUser,webId)  {
    removeFriend(loggedUser,webId);
}

/* async function getFriends(webId){
    const friends= await solid.data[webId].friends;
    return friends;
}
 */

async function checkFriend(loggedUser , webId)  {
    
    let friendship = await getFriendShip(loggedUser , webId)

    if(friendship.status=="accepted"){
        return true
    }

    return false;
}


export default function Prueba(props){
    const [webId] = useState( props.webId );

    const [userNAme] = useState(useLDflex(`[${webId}].name`))



    return userNAme;

}


/* 
export default  function ButtonAddOrDelete (props) {


    const [webId] = useState( props.webId );
    const [loggedUser] = useState( props.loggedUser );

    
    //const friends =   getFriends(useLDflexList("["+webId+"]"+'.friends') ).then((item)=> {return item;});
    

    
    return (
         !checkFriend(loggedUser, webId )?
            <Button id="addFriend" onClick={addFriendship(loggedUser,webId)}>Seguir</Button> 
            : <Button id="remove Friend" onClick={removeFriendship(loggedUser,webId)} >Dejar de seguir</Button>
    )

    
}
 */







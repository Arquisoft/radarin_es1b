import React, { useState } from 'react';



import { getFriendShip} from '../../api/api';




async function checkFriend(loggedUser , webId)  {
    
    let friendship = await getFriendShip(loggedUser , webId)

    if(friendship.status=="accepted"){
        return true
    }

    return false;
}


export default function Prueba(props){
    const [webId] = useState( props.webId );

    //const [userNAme] = useState(useLDflex(`[${webId}].name`))



    return null;

}









import React from 'react';
import {useWebId} from '@solid/react';

import LoginContainer from './Container';
import useProfile from "../profile/useProfile";
import { LoggedIn} from '@solid/react';
import AddUsersContainer from "../login/AddUsersContainer"

export default () => {
    //useWebId() te devuelve el url del perfil logeado con una String , que cambia automaticamente cuando el usuario se deslogea o cambia de perfil 
    const webId = useWebId()
    // almacena en profile las fotos, name , url ...
    const profile = useProfile(webId)
    



    // function Greeting(props) {
    //     const isLoggedIn = props.isLoggedIn;
    //     const fetchUsers = async () => {
    //       const webId = profile.loggedUserWebID;
    //       const fullName = profile.fullName;
    //       console.log("WebId " + webId)
    //       console.log("fullName " + fullName)
    //       try {
    //           const resp = await addUser(webId,fullName);
    //           console.log(resp);
    //           console.log("Hago la llamada")
          
    //       } catch (e) {
    //           console.log("Error adding users to restapi.")
    //        }
    //     };
        
    //     if (isLoggedIn) {
    //         fetchUsers();
    //     }
    //     return <h1></h1>;
    //   }
    
    //<LoginContainer es un nombre cualquiera , lo que nos interesa es pasarle como parametro el ...profile a export default.. la funcion de la clase Container
    return <span> 
        <LoginContainer {...profile} />  
        <LoggedIn> 
            {webId!==null && profile.fullName!==undefined ? <AddUsersContainer webId = {webId} fullName={profile.fullName}/> : null}
        </LoggedIn> 
    </span> 
    ;
}

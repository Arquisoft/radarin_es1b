import React from 'react';
import {useWebId} from '@solid/react';

import LoginContainer from './Container';
import useProfile from "../profile/useProfile";
import {addUser} from "../../api/api";

export default () => {
    //useWebId() te devuelve el url del perfil logeado con una String , que cambia automaticamente cuando el usuario se deslogea o cambia de perfil 
    const webId = useWebId()
   
    // almacena en profile las fotos, name , url ...
    const profile = useProfile(webId)

    if (profile.fullName!=undefined) {
        
        console.log("estoy aqui soy " + profile.fullName);
        console.log("Mi webId es  " + profile.loggedUserWebID);
        const apicall = addUser(profile.fullName, profile.loggedUserWebID);
        console.log(apicall);

    }

    //<LoginContainer es un nombre cualquiera , lo que nos interesa es pasarle como parametro el ...profile a export default.. la funcion de la clase Container
    return <LoginContainer {...profile} />;
}

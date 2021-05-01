import React from 'react';
import {useWebId} from '@solid/react';

import LoginContainer from './Container';
import useProfile from "../profile/useProfile";
import { LoggedIn,LoggedOut} from '@solid/react';
import AddUsersContainer from "../login/AddUsersContainer"
import ChangeStatus from "./ChangeStatusContainer"

const Index = () => {
    //useWebId() te devuelve el url del perfil logeado con una String , que cambia automaticamente cuando el usuario se deslogea o cambia de perfil 
    const webId = useWebId()
    const lastWebId = webId
    //console.log("WEBID REGISTRADO " + lastWebId)
    // almacena en profile las fotos, name , url ...
    const profile = useProfile(webId)
    //<LoginContainer es un nombre cualquiera , lo que nos interesa es pasarle como parametro el ...profile a export default.. la funcion de la clase Container
    return <span> 
        <LoginContainer {...profile} />  
        <LoggedIn> 
            {webId!==null && profile.fullName!==undefined ?  <AddUsersContainer webId = {webId} fullName={profile.fullName}/> : null}
            {webId!==null ?  <ChangeStatus webId = {webId} status={"online"} hora ={"true"}/> : null}
        </LoggedIn> 
        <LoggedOut>
            <ChangeStatus webId = {lastWebId} status={"offline"} hora ={"false"}/> 
        </LoggedOut>
    </span> 
    ;
}

export default Index

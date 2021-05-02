import React from 'react';
import useProfile from "./useProfile";
import ProfileContainer from "./Container";
import{updateLastTime} from '../../api/api'

const Index = ({webId}) => {

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    updateLastTime(webId, hoy );
      
    const profile = useProfile(webId);

    return <ProfileContainer {...profile} />; //le pasa los valores extraidos de la consulta a ProfileContainer de Container.js
}

export default Index
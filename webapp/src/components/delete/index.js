import React from 'react';
import {removeUser} from '../../api/api'


const Index = ({webId}) => {


    console.log("eliminar usuario " + webId)

    removeUser(webId);

    return ""; //le pasa los valores extraidos de la consulta a ProfileContainer de Container.js
}

export default Index
import React from 'react';

import FriendList from './FriendList';
import CircularProgress from "@material-ui/core/CircularProgress";

//CircularProgress hace que se mantenga cargando hasta que cargen los datos

const Container = ({pending, webId}) => {
    return (
        pending ? <CircularProgress/> :<FriendList webId={webId}/>
    )
}

export default Container

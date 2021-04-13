import React from "react";

import FriendContainer from './Container'
import useProfile from "../../profile/useProfile";

export default ({webId,logged}) => {
    const profile = useProfile(webId) //accede a las consultas para extraer los datos y se las pasa al contenedor
    profile.loggedUserWebID=logged
    return <FriendContainer
        {...profile}
    />;
}
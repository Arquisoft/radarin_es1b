import React from "react";

import FriendContainer from './FriendPopupContainer'
import useProfile from "../../profile/useProfile";

const Index = ({webId}) => {
    const profile = useProfile(webId) //accede a las consultas para extraer los datos y se las pasa al contenedor
    return <FriendContainer
        {...profile}
    />;
}

export default Index;


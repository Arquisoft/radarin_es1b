import React from "react";

import FriendContainer from './Container'
import useProfile from "../../../profile/useProfile";

const Index = ({webId, onClickFunction}) => {
    const profile = useProfile(webId) //accede a las consultas para extraer los datos y se las pasa al contenedor
    return <FriendContainer
        {...profile}
        onClickFunction={onClickFunction}
    />;
}

export default Index
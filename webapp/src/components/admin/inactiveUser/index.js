import React from "react";
import Friend from './Container'
import useProfile from "../../profile/useProfile";

const Index = ({webId}) => {
    const profile = useProfile(webId) //accede a las consultas para extraer los datos y se las pasa al contenedorç
    return <Friend  Container {...profile} />;
}

export default Index;


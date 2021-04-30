import Friend from "./FriendPopup";
import LoadingFriend from "./LoadingPopup";
import React from "react";

//recibe los parametros y si no estan cargando los añade al componente amigo
const Container =  ({webId, fullName, imageSrc, pending}) => (
    pending ?
        <LoadingFriend webId={`${webId}`}/> :
        <Friend
            webId={`${webId}`}
            fullName={`${fullName}`}
            imageSrc={imageSrc ? `${imageSrc}` : undefined}
        />
        
);

export default Container
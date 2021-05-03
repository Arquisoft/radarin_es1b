import Friend from "./Friend";
import LoadingFriend from "./LoadingFriend";
import React from "react";

/** 
function sacarFecha(webId) {

    const web = webId;
    //llamada a la funcion
    
    
}
*/
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
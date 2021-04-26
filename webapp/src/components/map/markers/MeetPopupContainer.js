
import Meet from "./MeetPopup"
import React from "react";

import LoadingFriend from "./LoadingPopup";

//recibe los parametros y si no estan cargando los añade al componente amigo
const Container =  ({webId, fullName, imageSrc, pending,meet}) => (
    pending ?
        <LoadingFriend webId={`${webId}`}/> :
        <Meet  webId={`${webId}`}
        fullName={`${fullName}`}
        imageSrc={imageSrc ? `${imageSrc}` : undefined}
        meet={meet}/>
        
        
);

export default Container
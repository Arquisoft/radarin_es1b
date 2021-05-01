import InterestPointPopup from "./InterestPointPopup"
import React from "react"

const Container = ({webId, fullName, imageSrc, label, loggedWebId}) => (
    <InterestPointPopup webId={`${webId}`}
    fullName={`${fullName}`}
    imageSrc={imageSrc ? `${imageSrc}` : undefined}
    label={label}
    loggedWebId={loggedWebId}/>
);

export default Container
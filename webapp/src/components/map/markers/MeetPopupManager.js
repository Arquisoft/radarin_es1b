import React from "react";

import MeetContainer from './MeetPopupContainer'
import useProfile from "../../profile/useProfile";

const Index = ({meet}) => {
    const profile = useProfile(meet.creator) //accede a las consultas para extraer los datos y se las pasa al contenedor
    return <MeetContainer
        {...profile } meet={meet}
    />;
}

export default Index;


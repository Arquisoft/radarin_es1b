<<<<<<< HEAD
import React, { useContext } from 'react'

=======
import React from 'react'
>>>>>>> 9bbaef16b8353f8114ae1491b06bcd839c4d6452
import Geocode from "react-geocode";
import MainMap from "./MainMap"

Geocode.setApiKey("AIzaSyC6fKABMEcc3viILCEmzr9Uy7pToGhbVv0");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const Map = (props) => {
<<<<<<< HEAD

    return (
        
=======
    return (        
>>>>>>> 9bbaef16b8353f8114ae1491b06bcd839c4d6452
        <div style={{ marginBottom: 10, position: 'relative' }}>
            {console.log("Rerenderizando")}
            <div>
                <MainMap webId={props.webId} />
            </div>
        </div>
    )
}



export default Map




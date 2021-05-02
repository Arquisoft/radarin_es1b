import React, { useContext } from 'react'

import Geocode from "react-geocode";
import MainMap from "./MainMap"
import{updateLastTime} from '../../api/api'

Geocode.setApiKey("AIzaSyC6fKABMEcc3viILCEmzr9Uy7pToGhbVv0");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const Map = (props) => {
    
    return (        
        <div style={{ marginBottom: 10, position: 'relative' }}>
            {console.log("Rerenderizando")}
            <div>
                <MainMap webId={props.webId} />
            </div>
        </div>
    )
}



export default Map




import React, { useContext } from 'react'
import {   Marker, Popup, useMapEvents } from 'react-leaflet';
import { LocationsContext } from '../../context/LocationsContext';
import { addLocation, addMeet } from '../../api/api';
import Geocode from "react-geocode";
import {iconMeet} from "./markers/IconMeet"
import MainMap from "./MainMap"
import useProfile from "../profile/useProfile";

Geocode.setApiKey("AIzaSyC6fKABMEcc3viILCEmzr9Uy7pToGhbVv0");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const Map = (props) => {


    const { position, setPosition } = useContext(LocationsContext);
    const { createMeet, setCreateMeet } = useContext(LocationsContext);
    const { seeFriends } = useContext(LocationsContext);
    const { meetPosition, setMeetPosition } = useContext(LocationsContext);
    const profile = useProfile(props.webId)

    function UpdateUserLocation() {
        if(position){
            return (
                <Marker position={position}>
                    <Popup>
                        Ubicación del usuario <br />
                </Popup>
                </Marker>
            )
        }else{
            return null;
        }
    }
     
 

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




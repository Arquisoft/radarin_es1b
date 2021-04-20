import React, { useEffect, useState, useContext } from 'react'
import {  MapContainer, TileLayer, LayersControl, Marker, Popup, useMapEvents } from 'react-leaflet';
import L, { marker } from 'leaflet';
import { LocationsContext } from '../../context/LocationsContext';
import FriendsLocationMarkers from './FriendsLocationMarkers';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Friend from "./markers/FriendPopupManager"

const Map = (props) => {
    const [map, setMap] = useState(null);
    const { position, setPosition } = useContext(LocationsContext);
    const { seeFriends } = useContext(LocationsContext);

    useEffect(() => {
        if (map) {
            console.log("Balllallalala")
            map.locate({
                setView: false
            })
            map.on('locationfound',handleOnLocationFound)
            
        }

    },[map])

    function handleOnLocationFound(e) {
        const latlng = e.latlng;
        const radius = e.accuracy;
        setPosition(e)
    }

    

    return (  
            <div>
                <MapContainer 
                            whenCreated={(map => setMap(map))}
                            center={[43.36, -5.90]}
                            zoom={10}
                            scrollWheelZoom={true}>
                    <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <LayersControl position='topleft'>
                        <LayersControl.Overlay checked name="Posicion actual">
                            {position?
                                <Marker position={position.latlng}>
                                    <Popup>
                                        <Friend webId={props.webId}/>
                                    </Popup>
                                </Marker>
                            :null}
                        </LayersControl.Overlay>
                        <LayersControl.Overlay checked name="Mostrar Amigos">
                            
                         <FriendsLocationMarkers webId={props.webId}/>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay checked name="Mostrar Meets">
                            {position?
                                null
                            :null}
                        </LayersControl.Overlay>
                    </LayersControl>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {seeFriends?<FriendsLocationMarkers webId={props.webId}/>:console.log("Amigos " + seeFriends)}

                </MapContainer>
            </div>
    )
}

export default Map



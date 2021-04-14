import React, { useEffect, useState, useContext } from 'react'
import {  MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { LocationsContext } from '../../context/LocationsContext';
import FriendsLocationMarkers from './FriendsLocationMarkers';

const Map = (props) => {
    const [map, setMap] = useState(null);

    const { seeFriends } = useContext(LocationsContext);



    useEffect(() => {
        if (map) {
            console.log("Balllallalala")
            map.locate({
                setView: true
            })
            map.on('locationfound',handleOnLocationFound)

            
        }


    })

    function handleOnLocationFound(e) {
        const latlng = e.latlng;
        const radius = e.accuracy;
        console.log("blablbllablablablabl"+e.latlng)
        L.marker(e.latlng).addTo(map);
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
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {seeFriends?<FriendsLocationMarkers webId={props.webId}/>:console.log("Amigos " + seeFriends)}

                </MapContainer>
            </div>
    )
}

export default Map



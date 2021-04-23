import React, { useEffect, useState, useContext } from 'react'
import {  MapContainer, TileLayer, LayersControl, Marker, Popup, useMapEvents } from 'react-leaflet';
import L, { marker } from 'leaflet';
import { LocationsContext } from '../../context/LocationsContext';
import FriendsLocationMarkers from './FriendsLocationMarkers';
import Friend from "./markers/FriendPopupManager"
import { addLocation, addMeet } from '../../api/api';
import Geocode from "react-geocode";    


import ubicationIMG from "./img/ubication.svg";

const Map = (props) => {
    const [map, setMap] = useState(null);
    const { position, setPosition } = useContext(LocationsContext);
    const { seeFriends } = useContext(LocationsContext);

    const [locateButtonAction, setLocateButtonAction]=useState(false);

    //const [meetButtonAction, setMeetButtonAction]=useState(false);

    let meetButtonAction=false;

    let propsAux=props;

    useEffect(() => {
        if (map) {
            console.log("Balllallalala")
            map.locate({
                setView: false
            })
            map.on('locationfound',handleOnLocationFound)
            map.on('click', function(e) {
                if(meetButtonAction){
                    alert("Creado meet, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
                    saveMeet(e.latlng).then(render())
                }
                
            });
            
            L.easyButton('<img src="https://imgur.com/lGHY75A.png" style="width:32px">', function(btn, map) {
                meetButtonAction=!meetButtonAction;
            }).addTo(map);
            L.easyButton('<img src="'+ubicationIMG+' style="width:32px">', function(btn, map) {
                map.locate({
                    setView: !locateButtonAction
                })
                setLocateButtonAction(!locateButtonAction)
            }).addTo(map);
        }

    },[map])

    function handleOnLocationFound(e) {
        const latlng = e.latlng;
        const radius = e.accuracy;
        setPosition(e)
    }

    function saveMeet(latlng){
        Geocode.fromLatLng(latlng.lat, latlng.lng).then(
            (response) => {
              let state, country;
              for (let i = 0; i < response.results[0].address_components.length; i++) {
                for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                  switch (response.results[0].address_components[i].types[j]) {
                    case "administrative_area_level_1":
                      state = response.results[0].address_components[i].long_name;
                      break;
                    case "country":
                      country = response.results[0].address_components[i].long_name;
                      break;
                    default:
                      break;
                  }
                }
              }
              addMeet(
                  propsAux.webId, latlng,
                  state, country);
            },
            (error) => {
              console.log("No se ha podido guardar la localización")
              console.error(error);
            }
        );
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
                        <LayersControl.Overlay checked name="Posición actual">
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




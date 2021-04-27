import React, { useEffect, useState, useContext } from 'react'
import {  MapContainer, TileLayer, LayersControl, Marker, Popup, useMapEvents } from 'react-leaflet';
import L, { marker } from 'leaflet';
import { LocationsContext } from '../../context/LocationsContext';
import FriendsLocationMarkers from './FriendsLocationMarkers';
import MeetLocationMarkers from"./MeetLocationMarkers";
import Friend from "./markers/FriendPopupManager"
import { addLocation, addMeet, getMeetsForUser } from '../../api/api';
import Geocode from "react-geocode";    
import useProfile from "../profile/useProfile";

import ubicationIMG from "./img/ubication.svg";

const Map = (props) => {
    const [map, setMap] = useState(null);
    const { position, setPosition } = useContext(LocationsContext);
    const { seeFriends } = useContext(LocationsContext);
    const { meetPosition } =useContext(LocationsContext);



    const [locateButtonAction, setLocateButtonAction]=useState(false);
    const profile = useProfile(props.webId)



    let meetLocations=[]

    let meetButtonAction=false;

    let propsAux=props;
    useEffect(() => {
        if (map) {
            map.locate({
                setView: false,
                watch:true
            })
            map.on('locationfound',handleOnLocationFound)
            map.on('click', function(e) {
                if(meetButtonAction){
                    alert("Creado meet, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
                    saveMeet(e.latlng)
                    meetButtonAction = true;
                }

                
                
            });
            
            L.easyButton('<img src="https://imgur.com/lGHY75A.png" style="width:32px">', function(btn, map) {
              if(meetButtonAction){
                meetButtonAction=false;
              }else{
                meetButtonAction=true;
              }
            }, "Crear una nueva reunión").addTo(map);
            L.easyButton('<img src="https://imgur.com/GIuLcjF.png" style="width:32px">', function(btn, map) {
                map.locate({
                    setView: true
                })
                setLocateButtonAction(!locateButtonAction)
            }, "Volver a mi ubicación").addTo(map);
        }

    },[map])

    useEffect(() => {
        const interval = setInterval(() => {
            if (map) {
                map.locate({
                    setView: false
                })
                map.on('locationfound',handleOnLocationFound)
                saveLocation(position.latlng)               
            }
        }, 20000);
        return () => clearInterval(interval);
      });


    function handleOnLocationFound(e) {
        const latlng = e.latlng;
        const radius = e.accuracy;
        setPosition(e)
    }



    function saveMeet(latlng){

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
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
                  state, country,date,time);
            },
            (error) => {
              console.log("No se ha podido guardar la localización")
              console.error(error);
            }
        );
      }

      function saveLocation(latlng) {
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
              if (profile.fullName!==undefined) {

                addLocation(
                    props.webId, [latlng.lat, latlng.lng],
                    state, country, profile.fullName);
                  
              }
            },
            (error) => {
              //console.log("No se ha podido guardar la localización")
              //console.error(error);
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
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                maxNativeZoom="19"
                                maxZoom="19"/>
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
                              <MeetLocationMarkers webId={props.webId}/>
                        </LayersControl.Overlay>
                    </LayersControl>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/*seeFriends?<FriendsLocationMarkers webId={props.webId}/>:console.log("Amigos " + seeFriends)*/}

                </MapContainer>
            </div>
    )
}

export default Map




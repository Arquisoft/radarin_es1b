import React, {  useContext } from 'react'
import {  MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LocationsContext } from '../../context/LocationsContext';
import { addLocation, addMeet } from '../../api/api';
import FriendsLocationMarkers from './FriendsLocationMarkers';
import Geocode from "react-geocode";
import MeetsMenu from "./MeetsMenu"
import {iconMeet} from "./markers/IconMeet"

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
    
    function UpdateUserLocation() {
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                saveLocation(e.latlng)
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

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
                  }
                }
              }
              const apicall = addLocation(
                  props.webId, [latlng.lat, latlng.lng],
                  state, country);
            },
            (error) => {
              console.log("No se ha podido guardar la localización")
              console.error(error);
            }
        );
    }

    function CreateMeet() {
            const map = useMapEvents({
                click(e) {
                    map.locate()
                    console.log(e.latlng)
                    if(createMeet){
                        setMeetPosition(e.latlng)  
                        saveMeet(e.latlng)                     
                    }
                    setCreateMeet(false)
                }
            })

              return meetPosition!=undefined?(
                <Marker position={meetPosition} icon={iconMeet}>
                    <Popup>
                        Ubicación del nuevo meet <br />
                    </Popup>
                </Marker>
            ):null    
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
                  }
                }
              }
              const apicall = addMeet(
                  props.webId, latlng,
                  state, country);
            },
            (error) => {
              console.log("No se ha podido guardar la localización")
              console.error(error);
            }
        );
    }

    return (
        
        <div style={{ marginBottom: 10, position: 'relative' }}>
            {console.log("Rerenderizando")}
            <h1>Ubicación del usuario</h1>
            <div>
                <MeetsMenu />
            </div>

            <div>
                <MapContainer center={[43.36, -5.90]}
                              zoom={10}
                              scrollWheelZoom={true}>
                    <CreateMeet />
                    <UpdateUserLocation/>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {seeFriends?<FriendsLocationMarkers webId={props.webId}/>:console.log("Amigos " + seeFriends)}

                </MapContainer>
            </div>
        </div>
    )
}

export default Map



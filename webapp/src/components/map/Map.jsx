import React, { useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LocationsContext } from '../../context/LocationsContext';
import { addLocation, getFriendsLocations, getFriends } from '../../api/api';
import FriendsLocationMarkers from './FriendsLocationMarkers';
import Geocode from "react-geocode";
import MeetsMenu from "./MeetsMenu"

Geocode.setApiKey(process.env.GEOCODE_KEY);
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();



const Map = (props) => {
    const [markers, serMarkers] = React.useState([]);
    const { position, setPosition } = useContext(LocationsContext);
    const { createMeet, setCreateMeet } = useContext(LocationsContext);
    const { seeFriends, setSeeFriends } = useContext(LocationsContext);

    function MyMapEvent() {
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                console.log(createMeet)
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

    function createNewMeet(e) {
        if(createMeet){
            
            setCreateMeet(false)
            console.log(e)
            markers.push(e.latlng)
            /*return (
                <Marker position={}>
                    <Popup>
                        NuevaReunion <br />
                    </Popup>
                </Marker>
            )*/
            
        }
        setCreateMeet(false)
    }
    function saveLocation(latlng) {
        Geocode.fromLatLng(latlng.lat, latlng.lng).then(
            (response) => {
              console.log(response)
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
              console.log(state, country);
              const apicall = addLocation(
                  props.webId, [latlng.lat, latlng.lng],
                  state, country);
              console.log(apicall)
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
                              onClick={createNewMeet}
                              zoom={10}
                              scrollWheelZoom={true}>
                    <MyMapEvent />
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {seeFriends?<FriendsLocationMarkers webId={props.webId}/>:console.log("Amigos " + seeFriends)}

                    {markers.map((position, idx) => 
                        <Marker key={`marker-${idx}`} position={position}>
                            <Popup>
                                <span>Nueva Reunion</span>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    )
}

export default Map



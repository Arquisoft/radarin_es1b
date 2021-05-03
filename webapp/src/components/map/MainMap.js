import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, LayersControl, Marker, Popup, useMapEvents } from 'react-leaflet';
import L, { marker } from 'leaflet';
import FriendsLocationMarkersFunc from './FriendsLocationMarkersFunc';
import MeetLocationMarkersFunc from "./MeetLocationMarkersFunc";
import Friend from "./markers/FriendPopupManager"
import { addLocation, addMeet } from '../../api/api';
import Geocode from "react-geocode";
import useProfile from "../profile/useProfile";
import MeetCreationDialog from './markers/dialog/MeetCreationDialog';
import IconButton from '@material-ui/core/IconButton';

const Map = (props) => {
  const [map, setMap] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [createMeet, setCreateMeet] = useState(false);
  const [ position, setPosition ]= useState(null);
  const [locateButtonAction, setLocateButtonAction] = useState(false);
  const profile = useProfile(props.webId)

  const [meetObjt, setMeetObjt] = useState(null);

  let propsAux = props;


  function useInitialice() {




    useEffect(() => {
      if (map) {
        map.locate({
          setView: false,
          watch: true
        })
        map.on('locationfound', handleOnLocationFound)
        L.easyButton('<img src="https://imgur.com/GIuLcjF.png" style="width:32px">', function (btn, map) {
          map.locate({
            setView: true
          })
          setLocateButtonAction(!locateButtonAction)
        }, "Volver a mi ubicación").addTo(map);
      }

    }, [map])
  }


  //Locate
  useEffect(() => {
    const interval = setInterval(() => {
      if (map) {
        map.locate({
          setView: false
        })
        map.on('locationfound', handleOnLocationFound)
      }
    }, 20000);
    return () => clearInterval(interval);
  });






  function handleOnLocationFound(e) {
    const latlng = e.latlng;
    const radius = e.accuracy;

    setPosition(e)
    saveLocation(latlng)
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
        if (profile.fullName !== undefined) {

          addLocation(
            props.webId, [latlng.lat, latlng.lng],
            state, country, profile.fullName);

        }
      },
      (error) => {
      }
    );
  }






  function onClickMeetButton() {

    if (createMeet) {
      setCreateMeet(false);
      setShowDialog(false)
      map.off('click')

    } else {
      setCreateMeet(true);
      map.on('click', function (e) {
        let meet = {
          latlng: e.latlng,
          creator: propsAux.webId,
        }
        setMeetObjt(meet)
        setShowDialog(true)
      }, [showDialog, createMeet])

    }
  }

  function closeCreate(){
    setCreateMeet(false)
    setShowDialog(false)
    onClickMeetButton()
  }

  useInitialice()

  return (
    <div>
      { showDialog&&createMeet ? <MeetCreationDialog open={showDialog} meet={meetObjt} create={closeCreate} /> : null}
      <MapContainer
        whenCreated={(map => setMap(map))}
        center={[43.36, -5.90]}
        zoom={10}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxNativeZoom="19"
          maxZoom="19" />
        <LayersControl position='topleft'>
          <LayersControl.Overlay checked name="Posición actual">
            {position ?
              <Marker position={position.latlng}>
                <Popup>
                  <Friend webId={props.webId} />
                </Popup>
              </Marker>
              : null}
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Mostrar Amigos">

            <FriendsLocationMarkersFunc webId={props.webId} />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Mostrar Meets">
            <MeetLocationMarkersFunc webId={props.webId} />
          </LayersControl.Overlay>
        </LayersControl>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </MapContainer>

      <IconButton id="refreshButton" onClick={onClickMeetButton.bind(this)}>
        {createMeet ? <img id="imgButtonMeets" src="https://imgur.com/PUuoI57.png" /> : <img id="imgButtonMeets" src="https://imgur.com/o2BuMLn.png" />}
      </IconButton>
    </div>
  )
}

export default Map




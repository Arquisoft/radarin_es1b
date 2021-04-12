import React, { Component } from 'react'
import { Marker, Popup } from 'react-leaflet';
import { getFriendsLocations } from '../../api/api';
import { useLDflexValue } from '@solid/react';
import {iconPerson } from "./markers/IconPerson"

function friendLocationMarkers (props) {
    const [webId, setWebId] = useState(webId);
    const [locs, setLocs] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        var promise = getFriendsLocations(webId);
    
        promise.then((result) => {
            console.log(result);
            result.locs.map((e) => {
                locs.push(e); 
            });
        });
    });

    render() {
        if(this.state.locs.length > 0){
            return(
                this.state.locs.map((loc) => {
                    return (<Marker position={[loc.location[0],loc.location[1]]} icon={ iconPerson }>
                        <Popup>
                            {loc.user}
                        </Popup>
                    </Marker>)
                })
            );
        }
        return (
            <div></div>
        );
    }

}

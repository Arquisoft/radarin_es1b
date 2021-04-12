import React, { Component } from 'react'
import { Marker, Popup } from 'react-leaflet';
import { getFriendsLocations } from '../../api/api';
import { useLDflexValue } from '@solid/react';
import {iconPerson } from "./markers/IconPerson"
import Notifications from "../notifications/Notifications";

export default class FriendsLocationMarkers extends Component {
    constructor(props){
        super(props);
        this.state = {
            webId: props.webId,
            locs: [],
            updated: false
        }

        this.posicion = props.posicion;
        console.log("Mi ubicación: " + this.posicion.lat + ", " + this.posicion.lng);
    }

    componentDidMount() {
        var promise = getFriendsLocations(this.state.webId)
        
        promise.then((result) =>{
            console.log(result)
            result.locs.map((e)=>{
                this.state.locs.push(e) 
            })         
        })
    }

    render() {
        if(this.state.locs.length > 0){
            return(
                this.state.locs.map((loc) => {
                    return (
                        <Marker position={[loc.location[0],loc.location[1]]} icon={ iconPerson }>
                        <Popup>
                            {loc.user}
                        </Popup>
                        
                    </Marker>
                    )
                })
            )
        }
        return (
            <div><Notifications/></div>
        )
    }
}

import React, { Component } from 'react'
import { Marker, Popup } from 'react-leaflet';
import { getFriendsLocations } from '../../api/api';
import {iconPerson } from "./markers/IconPerson"

export default class FriendsLocationMarkers extends Component {
    constructor(props){
        super(props);
        this.state = {
            webId: props.webId,
            locs: [],
            updated: false
        }
    }

    componentDidMount() {
        var promise = getFriendsLocations(this.state.webId)
        
        promise.then((result) =>{
            result.locs.forEach((e)=>{
                this.state.locs.push(e)
            })
        })
    }

    render() {
        if(this.state.locs.length > 0){
            return(
                this.state.locs.map((loc) => {
                    return (<Marker position={[loc.location[0],loc.location[1]]} icon={ iconPerson }>
                        <Popup>
                            {loc.fullName}
                        </Popup>
                    </Marker>)
                })
            )
        }
        return (
            <div></div>
        )
    }
}

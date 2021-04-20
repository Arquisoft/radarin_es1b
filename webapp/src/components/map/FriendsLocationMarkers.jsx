import React, { Component } from 'react'
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import { getFriendsLocations } from '../../api/api';
import { iconPerson } from "./markers/IconPerson"

import Friend from "../friendList/friend/index"

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
                
                <LayerGroup >
                {this.state.locs.map((loc) => {
                    return (<Marker position={[loc.location[0],loc.location[1]]} icon={ iconPerson }>
                        
                        <Popup>
                            <Friend webId={loc.user}/>
                        </Popup>
                    </Marker>)
                })}
                </LayerGroup>
            )
        }
        return (
            null
        )
    }
}

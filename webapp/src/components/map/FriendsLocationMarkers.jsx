
import React, { Component } from 'react'
import { Marker, Popup } from 'react-leaflet';
import { getFriendsLocations } from '../../api/api';
import { useLDflexValue } from '@solid/react';


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
            result.map((e)=>{
                this.state.locs.push(e) 
            })           
                
            this.state.locs.forEach(e => {        
                console.log("entro");
                console.log(e.user);
            });
        })
        this.render()
    }

    render() {
        console.log("Render:")
        console.log(this.state.locs.length)
        if(this.state.locs.length > 0){
            return(
                <Marker position={[this.state.locs[0].location[0],this.state.locs[0].location[1]]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            )
        }
        return (
            <div>
            </div>
        )
    }
}


import React, { Component } from 'react'
import { Marker, Popup } from 'react-leaflet';
import { getFriendsLocations } from '../../api/api';
import { useLDflexValue } from '@solid/react';


export default class FriendsLocationMarkers extends Component {
    constructor(props){
        super(props);
        this.state = {
            webId: props.webId,
            locs: []
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
    }

    render() {
        if(this.state.locs > 0){
            console.log("Estamos")
            return (
                <div>
                </div>
            )
        }
        return (
            <div>
            </div>
        )
    }
}

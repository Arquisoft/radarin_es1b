import React, { Component } from 'react'
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import { getFriendsLocations } from '../../api/api';
import { iconPerson } from "./markers/IconPerson"

import Friend from "./markers/FriendPopupManager"

export default class FriendsLocationMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            webId: props.webId,
            locs: this.props.locs,
            updated: false
        }
    }

    componentDidUpdate() {
        if (this.state.locs.length !== this.props.locs.length) {
            this.setState({
                locs: this.props.locs
            })
        }
    }

    render() {
        return (
            <LayerGroup >
                {this.state.locs.map((loc) => {
                    return (<Marker position={[loc.location[0], loc.location[1]]} icon={iconPerson}>
                        <Popup>
                            <Friend webId={loc.user} />
                        </Popup>
                    </Marker>)
                })}
            </LayerGroup>
        )
    }
}

import React, { Component, useEffect } from 'react'
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import { iconMeet } from "./markers/IconMeet"
import { iconOwnMeet } from "./markers/IconOwnMeet"
import Meet from "./markers/MeetPopupManager"

export default class MeetLocationMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            webId: this.props.webId,
            locs: this.props.meets,
            updated: false
        }

    }

    render() {
        return (

            <LayerGroup >
                {this.props.meets.map((loc) => {
                    return loc.creator != this.state.webId ?
                        <Marker position={[loc.location[0], loc.location[1]]} icon={iconMeet}>

                            <Popup>
                                <Meet meet={loc} loggedWebId={this.state.webId} />
                            </Popup>
                        </Marker>
                        :
                        <Marker position={[loc.location[0], loc.location[1]]} icon={iconOwnMeet}>

                            <Popup>
                                <Meet meet={loc} loggedWebId={this.state.webId} />
                            </Popup>
                        </Marker>
                })}
            </LayerGroup>
        )


    }
}

import React, { Component } from 'react'
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import { getMeetsForUser } from '../../api/api';
import { iconMeet } from "./markers/IconMeet"
import { iconOwnMeet } from "./markers/IconOwnMeet"
import Meet from "./markers/MeetPopupManager"


export default class MeetLocationMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            webId: props.webId,
            locs: [],
            updated: false
        }
    }

    componentDidMount() {
        var promise = getMeetsForUser(this.state.webId)

        promise.then((result) => {

            result.forEach((e) => {
                this.state.locs.push(e)
            })
        })
    }

    render() {
        if (this.state.locs.length > 0) {

            return (

                <LayerGroup >
                    {this.state.locs.map((loc) => {



                        return loc.creator != this.state.webId ? <Marker position={[loc.location[0], loc.location[1]]} icon={iconMeet}>

                            <Popup>
                                <Meet meet={loc} />
                            </Popup>
                        </Marker> :
                            <Marker position={[loc.location[0], loc.location[1]]} icon={iconOwnMeet}>

                                <Popup>
                                    <Meet meet={loc} />
                                </Popup>
                            </Marker>



                    })}
                </LayerGroup>
            )
        }
        return (
            null
        )
    }
}

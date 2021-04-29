import React, { Component, useEffect } from 'react'
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




    async componentDidMount() {
        this.updateMeets()
    }

    async componentDidUpdate() {
        this.timeUpdateMeets()
    }


    async timeUpdateMeets() {
        const interval = setInterval(() => {
            this.updateMeets()

        }, 20000);
        return () => clearInterval(interval);
    }

    async updateMeets() {
        var promise = getMeetsForUser(this.state.webId)

        promise.then((result) => {
            this.setState({
                locs: result
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
                                <Meet meet={loc} loggedWebId={this.state.webId} />
                            </Popup>
                        </Marker> :
                            <Marker position={[loc.location[0], loc.location[1]]} icon={iconOwnMeet}>

                                <Popup>
                                    <Meet meet={loc} loggedWebId={this.state.webId} />
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

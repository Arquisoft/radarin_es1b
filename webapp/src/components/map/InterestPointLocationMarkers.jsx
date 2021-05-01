import React, { Component, useEffect } from 'react'
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import { getInterestPointsForUser } from '../../api/api';
import { iconInterestPoint } from "./markers/IconInterestPoint"
import InterestPoint from "./markers/InterestPointPopupManager"

export default class InterestPointLocationMarkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            webId: props.webId,
            locs: []
        }
    }

    async componentDidMount() {
        this.updatePoints()
    }

    async updatePoints() {
        var promise = getInterestPointsForUser(this.state.webId)

        promise.then((result) => {
            this.setState({
                locs: result
            })
        })
    }

    render() {
        if (this.state.locs.length > 0) {
            return (
                <LayerGroup>
                    {this.state.locs.map((loc) => {
                        return <Marker position={[loc.location[0], loc.location[1]]} icon={iconInterestPoint}>
                        <Popup>
                            <InterestPoint meet={loc} loggedWebId={this.state.webId} />
                        </Popup>
                    </Marker>
                    })}
                </LayerGroup>
            )
        }
    }
}
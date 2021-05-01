import React from "react"

import InterestPointContainer from "./InterestPointPopupContainter"
import useProfile from "../../profile/useProfile"

const Index = ({point, loggedWebId}) => {
    const profile = useProfile(point.creator)
    return <InterestPointContainer
        {...profile} point={point} loggedWebId={loggedWebId}
    />
}

export default Index;
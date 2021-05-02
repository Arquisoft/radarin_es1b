import React, { useState, useEffect } from 'react';
import { getFriendsLocations } from '../../api/api';
import FriendsLocationMarkers from "./FriendsLocationMarkers"

function FriendsLocationMarkersFunc(props) {
    const [friends, setFriends] = useState([])
    const [update, setUpdate] = useState(true)
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        setUpdate(!update)
        fetchData()
  
      }, 3000);
      return () => clearInterval(interval);
    }, [friends, update]);
  
    async function fetchData() {
      getFriendsLocations(props.webId).then((result) => {
  
        if (friends.length !== result.locs.length) {
          setFriends([])
          console.log("Update FriendsFunc")
          result.locs.forEach((e) => {
            setFriends(friends => [...friends, e]);
          })
        }
        })
    }
  
  
  
  
  return (<div>
    <FriendsLocationMarkers webId={props.webId} locs={friends}></FriendsLocationMarkers>
  </div>)
  }
  
  export default FriendsLocationMarkersFunc
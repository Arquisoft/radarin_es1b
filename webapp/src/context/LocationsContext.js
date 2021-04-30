import React, {useState, createContext} from "react";

export const LocationsContext = createContext();

export const LocationsContextProvider = (props) => {
    const [locations, setLocations] = useState([]);
    const [position, setPosition] = useState(); 

    const [seeFriends, setSeeFriends] = useState();
      
    const [meetPosition, setMeetPosition] = useState();
    const [createMeet, setCreateMeet] = useState(); 
    const [seeMeets, setSeeMeets] = useState();    

    return (
        <LocationsContext.Provider value={{locations, setLocations,
                                             position, setPosition,
                                             createMeet, setCreateMeet,
                                             seeMeets, setSeeMeets,
                                             seeFriends, setSeeFriends,
                                             meetPosition, setMeetPosition}}>
            {props.children}
        </LocationsContext.Provider>
    )
}
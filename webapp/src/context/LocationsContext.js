import React, {useState, createContext} from "react";

export const LocationsContext = createContext();

export const LocationsContextProvider = (props) => {
    const [locations, setLocations] = useState([]);
    const [position, setPosition] = useState(); 
    const [createMeet, setCreateMeet] = useState(); 
    const [seeMeets, setSeeMeets] = useState();
    const [seeFriends, setSeeFriends] = useState();    

    return (
        <LocationsContext.Provider value={{locations, setLocations,
                                             position, setPosition,
                                             createMeet, setCreateMeet,
                                             seeMeets, setSeeMeets,
                                             seeFriends, setSeeFriends}}>
            {props.children}
        </LocationsContext.Provider>
    )
}
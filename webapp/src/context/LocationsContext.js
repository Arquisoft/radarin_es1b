import React, {useState, createContext} from "react";

export const LocationsContext = createContext();

export const LocationsContextProvider = (props) => {
    const [locations, setLocations] = useState([]);
    const [position, setPosition] = useState(); 
    const [createMeet, setCreateMeet] = useState();    

    return (
        <LocationsContext.Provider value={{locations, setLocations,
                                             position, setPosition,
                                             createMeet, setCreateMeet}}>
            {props.children}
        </LocationsContext.Provider>
    )
}
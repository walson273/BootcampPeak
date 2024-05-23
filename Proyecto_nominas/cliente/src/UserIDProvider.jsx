import React, { useState, useContext } from "react";

const userIDContext = React.createContext();

const userToggleID = React.createContext();


export function useUserIDContext() {
    return useContext(userIDContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

export function UserIDProvider(props) {

    const [userID, setUserID] = useState('2');

    const cambiaID = (id) => {
           setUserID(id);
        
    }

    return (
        <userIDContext.Provider value={userID}>
            <userToggleID.Provider value={cambiaID}>
                    {props.children}
            </userToggleID.Provider>
       </userIDContext.Provider>
    );
}
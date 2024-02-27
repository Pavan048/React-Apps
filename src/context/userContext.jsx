import React from 'react';

const userInfo = {
    name : "Pavan Sajjarao" , 
    age : 20,
    sex : "never before"
}

const userLogin = {
    status : true,
    msg : "login to view information"
}

export const UserContext = React.createContext();

export const UserContextProvider = ({children}) => {
    return <UserContext.Provider value={{userInfo , userLogin}}>{children}</UserContext.Provider>
}
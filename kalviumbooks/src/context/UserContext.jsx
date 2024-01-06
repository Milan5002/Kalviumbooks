import React, { createContext, useState } from 'react'

export const  AppContext = createContext();

const UserContext = ({children}) => {
    const [value,setValue] = useState("");
    const [showBook,setshowBook] = useState(false);         

  return (  
    <div> 
        <AppContext.Provider value={{value,setValue,showBook,setshowBook}}> 
            {children}
        </AppContext.Provider>
    </div>
  )
}

export default UserContext
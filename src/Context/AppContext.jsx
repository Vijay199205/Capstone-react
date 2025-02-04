
import { createContext, useEffect, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const AppContext =  createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({children}) =>{

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("users",))|| null
    );
    const [selectedGerners, setSelectedGerners] = useState([
        JSON.parse(localStorage.getItem("selectedgeners")) || []
    ])

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user));
    },[user])

    useEffect(()=>{
        localStorage.setItem("SelectedGerners", JSON.stringify(selectedGerners))
    },[selectedGerners])

    return(
        <AppContext.Provider 
        value={{
            user,
            setUser,
            setSelectedGerners,
            selectedGerners
        }}
        >
        {children}
        </AppContext.Provider>
    )

};

export default AppContext
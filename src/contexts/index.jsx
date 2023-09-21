import React, { useState, useContext, createContext } from 'react'

const newInstContext = createContext()

export const NewInstallationProvider = ({ children }) => {

  const [newInstToggle, setNewInstToggle] = useState(false)
  const [overlayDisplay, setOverlayDisplay] = useState({display:"none"})

  return (
    <newInstContext.Provider value={{newInstToggle,setNewInstToggle,overlayDisplay,setOverlayDisplay}}>
      {children}
    </newInstContext.Provider>
  )
}

export const useInst = () => useContext(newInstContext)
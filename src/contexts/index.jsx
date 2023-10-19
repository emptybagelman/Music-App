import React, { useState, useContext, createContext } from 'react'

const newInstContext = createContext()

export const NewInstallationProvider = ({ children }) => {

  const [newInstToggle, setNewInstToggle] = useState(false)
  const [overlayDisplay, setOverlayDisplay] = useState({display:"none"})
  const [overlayInfoFill,setOverlayInfoFill] = useState({"name":"","version":"Latest release (1.20.1)","directory":"","resolution":"autoxauto","javaexec":"","jvm":""})

  return (
    <newInstContext.Provider value={{newInstToggle,setNewInstToggle,overlayDisplay,setOverlayDisplay,overlayInfoFill,setOverlayInfoFill}}>
      {children}
    </newInstContext.Provider>
  )
}

export const useInst = () => useContext(newInstContext)
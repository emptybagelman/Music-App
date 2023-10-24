import React, { Fragment } from 'react'
import { useLocation, Link } from "react-router-dom"
import "./style.css"

const NotFound = () => {
    console.log("not found")
    const location = useLocation()

  return (
    <div id='main'>
    <h1>BEANS</h1>
    </div>
  )
}

export default NotFound
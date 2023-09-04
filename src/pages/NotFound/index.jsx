import React, { Fragment } from 'react'
import { useLocation, Link } from "react-router-dom"
import "./style.css"

const NotFound = () => {
    console.log("not found")
    const location = useLocation()

  return (
    <>
    <h1>BEANS</h1>
    </>
  )
}

export default NotFound
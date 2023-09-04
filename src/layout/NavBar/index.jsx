import React from "react"
import { NavLink, useLocation, Outlet } from "react-router-dom"
import "./style.css"

const NavBar = () => {

    let activeStyle = {
        "textDecoration":"underline",
        "color":"white"
    }

    const navA = ({ isActive }) => (isActive ? activeStyle : undefined)

    return (
        <>
            <nav className="navrow">
                <h6>MINECRAFT FOR WINDOWS</h6>
                <ul id='navbar'>
                    <li><NavLink to="/" style={navA}>Play</NavLink></li>
                    <li><NavLink to="/Realms" style={navA}>Realms</NavLink></li>
                    <li><NavLink to="/FAQ" style={navA}>FAQ</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
import React, { useState } from 'react'
// import '../assets/leftBar.css'

export default function MainSplash(){
    return (
        <div id='mainsplash'>
            <img src="../src/assets/minecraft1.jpg" alt="" />
            {/* <h1>MINECRAFT</h1> */}
            <img id="logo" src="../src/assets/logo.png" alt="MINECRAFT" />
            <div className="subheader">
                <h2>Volume Alpha</h2>
                <h4> - C418</h4>
            </div>
        </div>
    )
}
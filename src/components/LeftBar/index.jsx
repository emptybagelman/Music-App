import React,{ useState } from 'react'

export default function LeftBar() {
  return (
    <div className="container">
      <ul id='links'>
        <li>
          <div className="user">
            <a href="/" >emptybagelman</a>
          </div>
        </li>
        <li id='mcJV'>
          <img src="./src/assets/grass_icon.jpg" alt="#" id='grass'/>
          <div>
            <a href="/">MINECRAFT:</a>
            <p>Java Edition</p>
          </div>
        </li>
        <li id='alpha'>
          <img src="./src/assets/grass_icon_invert.jpg" alt="#" id='grass'/>
          <a href="/">Volume Alpha</a>
        </li>
        <li id="beta">
          <img src="./src/assets/icon_3.jpg" alt="#" id='grass'/>
          <a href="/">Volume Beta</a>
        </li>
      </ul>
    </div>
  )
}
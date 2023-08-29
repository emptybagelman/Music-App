import React,{ useState } from 'react'

export default function LeftBar() {
  // const [list, setList] = useState([])
  // const [item,setItem] = useState("")

  // const songArray = []

  async function getSongs() {
    const response = await fetch("http://localhost:3000/songs")
    const songs = await response.json()
    songs.forEach(item => songArray.push(item.name))
  }

  return (
    <div className="container">
      <ul id='links'>
        <li>
          <div className="user">
            <a href="#" >emptybagelman</a>
          </div>
        </li>
        <li id='mcJV'>
          <img src="./src/assets/grass.png" alt="#" id='grass'/>
          <div>
            <a href="#">Minecraft:</a>
            <p>Java Edition</p>
          </div>
        </li>
        <li id='alpha'>
          <img src="./src/assets/jukebox.png" alt="#" id='grass'/>
          <a href="#">Volume Alpha</a>
        </li>
      </ul>
    </div>
  )
}
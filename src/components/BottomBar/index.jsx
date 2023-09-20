import React,{ useEffect,useState } from 'react'
import SongItem from "../SongItem"
import "./style.css"
// import Dropdown from "./Dropdown"
// import songsJSON from "./songs.json"

// import '../assets/leftBar.css'

export default function BottomBar({chooseAlbum}) {

    // const openSpotifyLink = () => {
    //     window.open("https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7?si=HjA2jT2DQCqL46pFm4VLJg","_blank")
    // }

    const [songs,setSongs] = useState([])
    const [dbWait, setdbWait] = useState(0)
    const [album,setAlbum] = useState("1")


    async function getSongs(album="1") {
        try {
            const response = await fetch(`http://localhost:5000/albums/${album}`)
            const data = await response.json()
            const read_data = JSON.parse(data.data.songs)
            setSongs(read_data)
            setdbWait(1)
        } catch (err) {
            console.log("OH NO ERROR!",err)
        }
    }
    
    const handleChange = (e) => {
        setAlbum(e)
        setdbWait(dbWait+1)
    }

    useEffect(() => {
        getSongs(album)
    },[dbWait])

    return (
        <div id='bottomcontainer'>
            <div className="releaseSection">
                <select name="selectAlbum" id="selectAlbum" value={album} onChange={e => {handleChange(e.target.value),chooseAlbum(e.target.value)}}>
                    <option value="1">Volume Alpha</option>
                    <option value="2">Volume Beta</option>
                </select>
                <img src="../src/assets/grass_icon.jpg" alt="" id="versionimg"/>

                <div className="play">
                    {/* <button onClick={openSpotifyLink}>PLAY</button> */}
                    <button>PLAY</button>
                </div>
                <div className="username">
                    <p>emptybagelman</p>
                </div>
            </div>
            <div className="songContainer">
                <ul className="songList" key="###">
                    <li id='songHeader' key="header">
                        <div className="idxname">
                            <p>#</p>
                            <p>Title</p>
                        </div>
                        <div>
                            <p>Plays</p>
                            <p></p>
                            <p>Length</p>
                        </div>
                    </li>
                    {songs.map((song,index) => {
                        return <SongItem key={index} song={song} index={index}/>
                    })}
                </ul>
            </div>
        </div>
    )
}
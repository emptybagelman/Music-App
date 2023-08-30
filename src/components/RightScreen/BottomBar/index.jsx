import React,{ useState } from 'react'
import SongItem from "../SongItem"
import songsJSON from "./songs.json"

// import '../assets/leftBar.css'

export default function BottomBar() {

    const openSpotifyLink = () => {
        window.open("https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7?si=HjA2jT2DQCqL46pFm4VLJg","_blank")
    }

    return (
        <div id='bottomcontainer'>
            <div className="releaseSection">
                <div className="dropDown">
                    <p>Latest Release</p>
                </div>
                <div className="play">
                    <button onClick={openSpotifyLink}>PLAY</button>
                </div>
                <div className="username">
                    <p>emptybagelman</p>
                </div>
            </div>
            <div className="songContainer">
                <ul className="songList">
                    <li id='songHeader'>
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
                    {songsJSON.map((song,index) => {
                        return <SongItem song={song} index={index}/>
                    })}
                </ul>
            </div>
        </div>
    )
}
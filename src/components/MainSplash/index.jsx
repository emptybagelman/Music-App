import React, { useEffect, useState } from 'react'
// import '../assets/leftBar.css'

export default function MainSplash(props){

    const [album,setAlbum] = useState("alpha")
    const [dbWait, setdbWait] = useState(0)

    async function getAlbum(album="alpha") {
        try {
            const response = await fetch(`http://localhost:3000/${album}`)
            const data = await response.json()
            setAlbum(data.album)
            setdbWait(1)
        } catch (err) {
            console.log("OH NO ERROR!",err)
        }
    }
    
    useEffect(() => {
        getAlbum(props.album ? props.album : "alpha")
    },[props.album])


    return (
        <div id='mainsplash'>
            <img src="../src/assets/minecraft1.jpg" alt="" id="splash"/>
            {/* <h1>MINECRAFT</h1> */}
            <img id="logo" src="../src/assets/logo.png" alt="MINECRAFT" />
            <div className="subheader">
                <h2>{album}</h2>
                <h4> - C418</h4>
            </div>
        </div>
    )
}
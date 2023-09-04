// import NavBar from "../src/components/NavBar"
import MainSplash from "./MainSplash"
import BottomBar from "./BottomBar"
import React,{ useState,useEffect } from "react"

export default function RightScreen() {

    const [album,setAlbum] = useState("")

    const chooseAlbum = (al) => {
        setAlbum(al)
    }


    return (
        <div className='rightscreen'>
            {/* <NavBar /> */}
            <MainSplash album={album}/>
            <BottomBar chooseAlbum={chooseAlbum}/>
        </div>
    )
}
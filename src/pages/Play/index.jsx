import {MainSplash} from "../../components"
import {BottomBar} from "../../components"
import React,{ useState,useEffect } from "react"

export default function Play() {

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
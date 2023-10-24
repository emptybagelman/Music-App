import {MainSplash} from "../../components"
import {BottomBar} from "../../components"
import React,{ useState } from "react"
import "./style.css"

export default function Play() {

    const [album,setAlbum] = useState("")
    const [expand,setExpand] = useState(true)
    const [style,setStyle] = useState({})

    const chooseAlbum = (al) => {
        setAlbum(al)
    }

    const expandSongList = () => {
        expand ? setExpand(false) : setExpand(true)
        if(expand){
            setStyle({height:"0"})
        }else{
            setStyle({})
        }
    }

    return (
        <div className='rightscreen'>
            {/* <MainSplash  splashStyle={style} album={album}/> */}
            <MainSplash album={album}/>
            <BottomBar expandSongList={expandSongList} chooseAlbum={chooseAlbum}/>
        </div>
    )
}
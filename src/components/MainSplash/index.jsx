import React, { useEffect, useState, useRef } from 'react'
import "./style.css"

export default function MainSplash(props){

    const [album,setAlbum] = useState("Volume Alpha")
    const [dbWait, setdbWait] = useState(0)
    const [imgStyle,setImgStyle] = useState(false)
    const [dimensions,setDimensions] = useState({
        width:{},
        height:{}
    })

    const imgRef = useRef()

    const ratio = 0.5625

    async function getAlbum(album="1") {
        try {
            const response = await fetch(`http://localhost:5000/albums/${album}`)
            const data = await response.json()
            const read_data = data.data.album_name
            setAlbum(read_data)
            setdbWait(1)
        } catch (err) {
            console.log("OH NO ERROR!",err)
        }
    }
    
    const compareRatios = () => {
        const splashRatio = (dimensions.height/dimensions.width).toFixed(4)
        if(Number(splashRatio) >= ratio){
            setImgStyle(true)
        }else{
            setImgStyle(false)
        }
    }

    function handleResize() {
        setDimensions({
            width:imgRef.current.clientWidth,
            height:imgRef.current.clientHeight
        })
    }

    useEffect(() => {
        handleResize()
        compareRatios()
    },[])

    useEffect(() => {
        compareRatios()
        window.addEventListener("resize",handleResize)
        return _ => window.removeEventListener("resize",handleResize)
    })

    useEffect(() => {
        getAlbum(props.album ? props.album : "1")
    },[props.album])

    return (
        <div ref={imgRef} id='mainsplash' style={props.splashStyle}>
            <img src="../src/assets/minecraft1.jpg" alt="" id="splash" style={{height: imgStyle ? "100%" : "auto", width: imgStyle ? "auto" : "100%"}}/>
            {/* <h1>MINECRAFT</h1> */}
            <img id="logo" src="../src/assets/logo.png" alt="MINECRAFT" />
            <div className="subheader">
                <h2>{album}</h2>
                <h4> - C418</h4>
            </div>
        </div>
    )
}
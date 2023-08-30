import TopBar from "./TopBar"
import MainSplash from "./MainSplash"
import BottomBar from "./BottomBar"
import React from "react"

export default function RightScreen() {
    return (
        <div className='rightscreen'>
            <TopBar />
            <MainSplash />
            <BottomBar />
        </div>
    )
}
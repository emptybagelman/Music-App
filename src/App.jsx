import React,{ useState } from 'react'
import './assets/App.css'

import {LeftBar, RightScreen} from "./components"

export default function App() {
    return (
        <div className='main'>
            <LeftBar />
            <RightScreen />
        </div>
    )
}
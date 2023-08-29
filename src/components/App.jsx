import React,{ useState } from 'react'
import '../assets/App.css'

import LeftBar from './LeftBar.jsx'
import RightScreen from './RightScreen.jsx'

export default function App() {
    return (
        <div className='main'>
            <LeftBar />
            <RightScreen />
        </div>
    )
}
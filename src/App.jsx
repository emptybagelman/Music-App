import React,{ useState } from 'react'
import { NavBar, LeftBar } from "./layout"
import { Routes, Route } from "react-router-dom"
import * as Pages from "./pages"
import './assets/App.css'

export default function App() {
    return (
        <div className='main'>
            <LeftBar />
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Pages.Play />}/>
                    <Route path="Realms"/>
                    <Route path="FAQ" />
                    <Route path="*" element={<Pages.NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}
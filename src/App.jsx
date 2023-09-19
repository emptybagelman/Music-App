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
                <Route path="/" element={<NavBar />} >
                    <Route index element={<Pages.Play />}/>
                    <Route path="Installations" element={<Pages.Installations />} />
                    <Route path="Realms" element={<Pages.Realms />}/>
                    <Route path="*" element={<Pages.NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}
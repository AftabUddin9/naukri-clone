import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './home/HomePage'

const BodyComponent = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default BodyComponent
import React from 'react'

import './index.scss'
import { Sidebar } from './components/Sidebar'
export const App = () => {
    return (
        <div className="todo">
            <Sidebar />
        </div>
    )
}
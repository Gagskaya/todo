import React from 'react'

import './Badge.scss'
export const Badge = ({color}) => {
    return (
        <i className={`badge badge--${color}`}></i>
    )
}

import React from 'react'
import classNames from 'classnames'

import './Badge.scss'
export const Badge = ({ color, className }) => {
    return (
        <i className={classNames("badge",className)} style={{background : color}}></i>
    )
}

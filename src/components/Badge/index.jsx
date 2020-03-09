import React from 'react'

import "./Badge.scss"
import classNames from 'classnames'
export const Badge = ({color,className}) => {
    return (
        <i className={classNames('badge', `badge--${color}`, className)} ></i>
    )
}

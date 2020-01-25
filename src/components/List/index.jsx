import React from 'react'
import className from 'classnames'
import './List.scss'
import { Badge } from '../Badge'

export const List = ({ items, show }) => {
    return (
        <ul className="todo__list" onClick={show}>
            {items.map((item, index) =>
                <li key={index} className={className(item.active ? 'active' : '')}>
                    <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
                    <span>{item.name}</span>
                </li>
            )}
        </ul>
    )
}

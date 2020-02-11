import React from 'react'
import axios from 'axios'

import './List.scss'
import { Badge } from '../Badge'
import removeSvg from './../../assets/img/remove.svg'

export const List = ({ items, show, isRemovable, onRemove }) => {
    const removeList = (item) => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
                onRemove(item.id)
            })
        }
    }
    return (
        <ul className="todo__list" onClick={show}>
            {
                items.map((item, index) => <li key={index} className={item.active ? 'active' : ''}>
                    <i>
                        {item.icon ? item.icon : <Badge color={item.color.name} />}
                    </i>
                    <span>{item.name}</span>
                    {isRemovable && <img onClick={() => removeList(item)} className='todo__list-remove' src={removeSvg} alt="Remove icon" />}
                </li>)
            }

        </ul>
    )
}

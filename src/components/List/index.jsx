import React from 'react'

import "./List.scss"
import { Badge } from './../../components'
import removeSvg from "./../../assets/img/remove.svg"
import axios from 'axios'
export const List = ({ items, showPopup, isRemovable, onRemove, showTasks,activeItem }) => {
    const removeList = (item) => {
        if (window.confirm("Вы действительно хотите удалить список?")) {
            axios.delete("http://localhost:3001/lists/" + item.id).then(() => {
                onRemove(item.id)
            })
        }
    }
    return (
        <ul className="list" onClick={showPopup}>
            {items.map((item, index) => <li onClick={()=> showTasks(item)} key={index} className={activeItem && activeItem.id === item.id ?  'active' : undefined}>
                <span>
                    {item.icon ? item.icon : <Badge color={item.color.name} />}
                </span>
                <p>{item.name}{item.tasks && `(${item.tasks.length})`}</p>
                {isRemovable && <i className="remove-btn" onClick={() => removeList(item)}><img src={removeSvg} alt="remove button" /></i>}
            </li>)}
        </ul>
    )
}

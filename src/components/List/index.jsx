import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import classNames from 'classnames'

import "./List.scss"
import { Badge } from './../../components'
import removeSvg from "./../../assets/img/remove.svg"

export const List = ({ items, showAddListPopup, isRemovable, onRemoveList, showTasks, activeItem }) => {
    let history = useHistory();
    const removeList = (item) => {
        if (window.confirm("Вы действительно хотите удалить список?")) {
            axios.delete("http://localhost:3001/lists/" + item.id).then(() => {
                onRemoveList(item.id)
            })
        }
    }
    return (
        <ul className="list-badge" onClick={showAddListPopup}>
            {items.map((item, index) => <li onClick={showTasks ? () => showTasks(item) : null} key={index} className={classNames(history.location.pathname === '/' ? '' : activeItem && activeItem.id === item.id ? 'active' : undefined)}>
                <Link to={`/lists/` + item.id}> <span >
                    <Badge color={item.color.name} />
                </span>
                    <p>{item.name}{item.tasks ? `(${item.tasks.length})` : "(0)"}</p>
                    {isRemovable && <i className="remove-btn" onClick={() => removeList(item)}><img src={removeSvg} alt="remove button" /></i>}</Link>
            </li>)}
        </ul>
    )
}

import React from 'react'
import './List.scss'
import classNames from 'classnames'
import { Badge } from '../../Badge'
const List = ({ items, showPopup }) => {
    return (
        <ul className="list" onClick={showPopup}>
            {
                items.map((item, index) => <li key={index} className={classNames(item.className, { 'active': item.active })}>
                    <i>
                        {item.icon ? item.icon : <Badge color={item.color}/>}
                    </i>
                    <span>{item.name}</span>
                </li>)
            }
        </ul>
    )
}
export default List;
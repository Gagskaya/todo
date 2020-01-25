import React from 'react'

import './AddList.scss'
import { List } from '../List'
import { useState } from 'react'
import { Badge } from '../Badge'
import closeSvg from './../../assets/img/close.svg'
export const AddList = ({ colors, onAdd }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const addList = () => {
        if (!inputValue) {
            alert('Введите название списка');
            return;
        }
        onAdd({
            "id": Math.random(),
            name: inputValue,
            "colorId": selectedColor
        })
    }
    return (
        <div className="todo__addlist">
            <List items={[
                {
                    icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    ,
                    name: 'Добавить список'
                }
            ]} show={() => setShowPopup(true)} />
            {showPopup && <div className="todo__addlist-popup">
                <i className="addlist-popup-close" onClick={() => setShowPopup(false)}> <img src={closeSvg} alt="close" />
                </i>
                <input onChange={e => {
                    setInputValue(e.target.value)
                }} value={inputValue} type="text" placeholder='Название списка' />
                <div className="todo__addlist-colors">
                    <ul>
                        {
                            colors.map(color => <li key={color.id}> <Badge color={color.name}
                                onClick={() => selectColor(color.id)}
                                className={selectedColor === color.id && 'active'}
                            /></li>)
                        }
                    </ul>
                </div>
                <button onClick={addList} className="btn">Добавить</button>
            </div>}
        </div>
    )
}

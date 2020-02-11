import React, { useEffect, useState } from 'react'

import './AddList.scss'
import closeSvg from './../../assets/img/close.svg'
import { List } from '../List'
import { Badge } from '../Badge'
import axios from 'axios'
export const AddList = ({ colors, onAdd }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedColor, selectColor] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const onAddList = () => {
        setShowPopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    }
    const onClose = () => {
        setShowPopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    };
    useEffect(() => {
        if (Array.isArray(colors)) {
            selectColor(colors[0].id)
        }
    }, [colors])
    const addList = () => {
        if (!inputValue) {
            alert('Введите значение');
            return;
        };
        setIsLoading(true)
        axios.post('http://localhost:3001/lists', {
            "name": inputValue,
            "colorId": selectedColor
        }).then(({ data }) => {
            const color = colors.find(color => color.id === selectedColor).name
            const listObj = { ...data, color: { name: color } }
            onAdd(listObj);
            onAddList();
            // onClose();
        }).finally(() => {
            setIsLoading(false)
        })

    };
    return (
        <div className="todo__addlist">
            <List items={[
                {
                    icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    ,
                    name: 'Добавить список',
                }
            ]}
                show={() => setShowPopup(!showPopup)}
            />
            {showPopup && <div className="todo__addlist-popup">
                <i className='todo__addlist-popup-close' onClick={onClose}><img src={closeSvg} alt="Кнопка закрыть" /></i>
                <input onChange={e => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Название списка' />
                <div className="todo__addlist-popup-colors">
                    <ul>
                        {
                            colors.map(color => <li key={color.id}><Badge onClick={() => selectColor(color.id)} color={color.name} className={selectedColor === color.id && "active"} /></li>)
                        }
                    </ul>
                </div>
                <button onClick={addList} className='btn'>{isLoading ? 'Добавление...' : 'Добавить'}</button>
            </div>}
        </div>

    )
}

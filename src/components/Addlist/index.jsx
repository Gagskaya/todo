import React, { useState } from 'react'

import "./AddList.scss"
import { List, Badge } from '..'
import closeSvg from './../../assets/img/close.svg'
import axios from 'axios'
export const AddList = ({ colors, onAdd }) => {
    const [selectedColor, selectColor] = useState(colors[0].id);
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const onClose = () => {
        setInputValue("");
        setVisiblePopup(false);
        selectColor(colors[0].id);
    }
    const addList = () => {
        if (!inputValue) {
            alert("Введите название списка!");
            return;
        }
        setIsLoading(true)
        axios.post("http://localhost:3001/lists", {
            "name": inputValue,
            "colorId": selectedColor
        }).then(({ data }) => {
            const color = colors.find(color => color.id === selectedColor).name;
            const listObj = { ...data, color: { name: color } };
            onAdd(listObj);
            onClose();
        }).finally(() => {
            setIsLoading(false)
        })
    }
    return (
        <div className="todo__addlist">
            <List items={[
                {
                    icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>,
                    name: "Добавить список"
                }
            ]} showPopup={() => setVisiblePopup(true)} />
            {visiblePopup && <div className="todo__addlist-popup">
                <input type="text" placeholder="Название списка" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <ul className="todo__addlist-popup-colors">
                    {
                        colors.map(color => <li key={color.id} onClick={() => selectColor(color.id)}><Badge color={color.name} className={selectedColor === color.id && 'active'} /></li>)
                    }
                </ul>
                <button className="btn" onClick={addList}>{isLoading ? "Добавление..." : "Добавить"}</button>
                <i onClick={onClose} className="close-btn"><img src={closeSvg} alt="close button" /></i>
            </div>}
        </div>
    )
}

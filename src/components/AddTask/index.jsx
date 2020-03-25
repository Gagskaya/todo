import React, { useState } from 'react'

import './AddTask.scss'
import axios from 'axios';

export const AddTask = ({ list, onAddTask }) => {
    const [activePopup, setActivePopup] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const onClose = () => {
        setInputValue("");
        setActivePopup(true);
    }
    const addTask = () => {
        if(!inputValue) {
            alert("Введите название задачи!")
            return;
        }
        const obj = {
            "listId": list.id,
            "text": inputValue,
            "completed": false
        }
        setIsLoading(true);
        axios.post('http://localhost:3001/tasks/', obj).then(({data}) => {
            onAddTask(list.id, data);
            onClose();
        }).finally(() => {
            setIsLoading(false);
        }).catch(()=> {
            alert("Ошибка при добавлении задачи!")
        })
    }
    return (
        <div className="todo__addtask">
            {activePopup ? <ul className="task-add" onClick={() => setActivePopup(false)}>
                <li>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <p>Новая задача</p>
                </li>
            </ul>
                : <div className="todo__addtask-popup">
                    <input type="text" placeholder="Текст задачи" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button disabled={isLoading} className="add-btn btn" onClick={addTask}>
                        {isLoading ? "Добавление..." : "Добавить задачу"}
                </button>
                    <button className="cancel-btn" onClick={onClose}>
                        Отмена
                </button>
                </div>}

        </div>
    )
}

import React, { useState } from 'react'
import axios from 'axios';

import './AddTask.scss'

export const AddTask = ({ onAddTask, list }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const onClose = () => {
        setVisiblePopup(false);
        setInputValue('');
    }
    const addTask = () => {
        if (!inputValue) {
            alert("Введите название задачи!");
            return;
        }
        setIsLoading(true);
        axios.post('http://localhost:3001/tasks', {
            "listId": list.id,
            "text": inputValue,
            "completed": false
        }).then(({ data }) => {
            onAddTask(data, list.id);
            onClose();
        }).catch(() => {
            alert("Ошибка при добавлении задачи")
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <div className="todo__tasks-add">
            {!visiblePopup && <ul onClick={() => setVisiblePopup(true)}>
                <li>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </li>
                <li>
                    <p>
                        Добавить задачу
                    </p>
                </li>
            </ul>}
            {visiblePopup && <div className="todo__tasks-add-popup">
                <input type="text" placeholder="Текст задачи" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="add-btn btn" onClick={addTask}>{isLoading ? "Добавление..." : 'Добавить задачу'}
                </button>
                <button className="close-btn btn" onClick={onClose}>Отмена</button>
            </div>}
        </div>
    )
}

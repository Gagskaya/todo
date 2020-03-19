import React from 'react'

import './Tasks.scss'
import editSvg from './../../assets/img/edit.svg'
import axios from 'axios'
import { AddTask } from '../AddTask'
export const Tasks = ({ list, onEditTitle }) => {
    const editTitle = () => {
        const newTitle = window.prompt("Название списка", list.name);
        if (newTitle) {
            onEditTitle(list.id, newTitle);
        }
        axios.patch('http://localhost:3001/lists/' + list.id, {
            name: newTitle
        }).catch(() => {
            alert("Не удалось обновить название списка")
        })
    }
    return (
        <div className="todo__tasks">
            <div className="todo__tasks-title">
                <h2>{list.name}</h2>
                <i><img onClick={editTitle} src={editSvg} alt="edit button" /></i>
            </div>
            <hr />
            {!list.tasks.length && <h2 className="tasks__items-title">Задачи отсутствуют</h2>}
            <div className="tasks__items" >
                {
                    list.tasks.map(task => <div className="tasks__items-row" key={task.id}>
                        <div className="checkbox">
                            <input type="checkbox" id={`task-${task.id}`} />
                            <label htmlFor={`task-${task.id}`}  >
                                <svg width="12" height="12" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </label>
                        </div>
                        <input type="text" readOnly value={task.text} />
                    </div>)
                }
                <AddTask />
            </div>
        </div>
    )
}

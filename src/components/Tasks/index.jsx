import React from 'react'

import './Tasks.scss'
import editSvg from './../../assets/img/edit.svg'
import axios from 'axios'
import { AddTask } from '../AddTask'
import { Task } from './Task'
export const Tasks = ({ list, onEditTitle, onAddTask, withoutEmpty, onRemoveTask, onEditTaskTitle, onCompleteTask }) => {
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
    const removeTask = (taskId) => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            onRemoveTask(list.id, taskId)
        }
    }
    const editTask = (taskId, text) => {
        const newTitle = window.prompt("Название задачи", text);
        if (newTitle) {
            onEditTaskTitle(taskId, list.id, newTitle);
        }
        axios.patch('http://localhost:3001/tasks/' + taskId, {
            text: newTitle
        })
    }
    const checkboxChange = (taskId,target) => {
        axios.patch('http://localhost:3001/tasks/' + taskId, {
            completed: target
        })
        onCompleteTask(taskId,list.id,target);
    }
    return (
        <div className="todo__tasks">
            <div className="todo__tasks-title">
                <h2 style={{ color: list.color.hex }}>{list.name}</h2>
                <i><img onClick={editTitle} src={editSvg} alt="edit button" /></i>
            </div>
            <hr />
            {list.tasks && <div className="tasks__items">
                {!withoutEmpty && !list.tasks.length && <h2 className="tasks__items-title">Задачи отсутствуют</h2>}
                {
                    list.tasks.map(task => <Task key={task.id} checkboxChange={checkboxChange} {...task} removeTask={removeTask} editTask={editTask} />)
                }
            </div>}
            <AddTask key={list.id} list={list} onAddTask={onAddTask} />
        </div>
    )
}


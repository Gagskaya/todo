import React from 'react'

import { List } from './../index'
import './AddTask.scss'
export const AddTask = () => {
    return (
        <div className="todo__addtask">
            <List items={[
                {
                    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>,
                    name: "Новая задача"
                }
            ]} />
            <div className="todo__addtask-popup">
                <input type="text" placeholder="Текст задачи"/>
                <button className="add-btn btn">
                Добавить задачу
                </button>
                <button className="cancel-btn">
                Отмена
                </button>
            </div>
        </div>
    )
}
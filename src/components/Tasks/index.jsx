import React from 'react'

import './Tasks.scss'
import editSvg from './../../assets/img/edit.svg'
// import checkSvg from './../../assets/img/check.svg'
export const Tasks = () => {
    return (
        <div className="todo__tasks">
            <div className="todo__tasks__title">
                <h2>Фронтенд</h2>
                <img src={editSvg} alt="Edit icon" />
            </div>
            <hr />
            <div className="todo__tasks__items">
                <div className="todo__tasks-row">
                    <div className="checkbox">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" className="check-label">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </label>
                    </div>
                    {/* <input type="text" value="ReactJS Hooks (useState, useReducer, useEffect и т.д.)" className="todo__tasks__text"/> */}
                </div>

            </div>
        </div>
    )
}


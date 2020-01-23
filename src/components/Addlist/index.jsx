import React, { useState } from 'react'
import List from '../List'

import './AddList.scss'
import { Badge } from '../../Badge';
const AddList = () => {
    const [showPopup, setShowPopup] = useState(true);
    return (
        <div className="add-list">
            <List
                items={[
                    {
                        className: 'list__add-btn',
                        icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ,
                        name: "Добавить список"
                    },
                ]}
                showPopup={() => {
                    setShowPopup(true)
                }} />
            {showPopup && <div className="add-list__popup">
                <input type="text" placeholder="Название папки" />
                <div className="add-list__popup">
                    <ul>
                        <li><Badge color="green"/></li>
                        <li><Badge color="green"/></li>
                    </ul>
                </div>
                <button className="btn add-list-btn">Добавить</button>
            </div>}
        </div>
    )
}
export default AddList;
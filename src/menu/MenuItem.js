import React from 'react';

const MenuItem = ({item}) => {
    return (
    // <li>
        <div className="menu-section-item">
            <p className="menu-item-title">{item.title}</p>
            <p className="menu-item-description">{item.description}</p>
            {/* <p className="menu-item-title">{item.moonriseMimosa}</p>
            <p className="menu-item-description">{item.description}</p> */}
        </div>
    // </li>
    )
}

export default MenuItem;
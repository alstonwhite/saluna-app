import React from 'react';

const MenuItem = ({item}) => {
    return (
        <div className="menu-section-item">
            {/* <p className="menu-item-title">{item.title}</p> */}
            <p className="menu-item-title">{item.itemName}</p>
            <p className="menu-item-description">{item.description}</p>
        </div>
    )
}

export default MenuItem;
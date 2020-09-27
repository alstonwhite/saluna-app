import React from 'react';

import MenuItem from "./MenuItem";

const MenuSection = ({section, items}) => {

    return (
        <div className="menu-section">
            <div className="menu-section-title">
                <h2>{section}</h2>
            </div>
            <div className="menu-section-items">
                <ul>
                {items && items.map(item => (
                        <MenuItem item = {item}/>
                    ))}
                </ul>
            </div>
        </div>
    );
  };
  export default MenuSection;
import React from 'react';

import MenuItem from "./MenuItem";

const MenuSection = ({section}) => {

    return (
        <div className="menu-section">
            <div className="menu-section-title">
                <h2>{section.section.sectionTitle}</h2>
            </div>
            <div className="menu-section-items">
                {section.items && section.items.map(item => (
                    <MenuItem item = {item}/>
                ))}
            </div>
        </div>
    );
  };

  export default MenuSection;
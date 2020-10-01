import React from 'react';

import MenuSection from "./MenuSection";

const MenuContent = ({sections, items}) => {

    sections.sort((a, b) => (a.fields.order.localeCompare(b.fields.order)));

    return (
        <div className="content-wrapper">
            <div className="spacer"></div>
            {sections && sections.map(section => (
                <MenuSection
                section={section}
                items={items}
                />
            ))}
        </div>
    );
  };
  
  export default MenuContent;
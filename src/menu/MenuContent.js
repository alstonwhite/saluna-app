import React from 'react';

import MenuSection from "./MenuSection";

const MenuContent = ({sections, items, menu}) => {

    return (
        <div className="content-wrapper">
            <div className="spacer"></div>
            {/* {sections && items && sections.map(section => (
                <MenuSection
                section={section}
                items={items}
                />
            ))} */}
            {console.log(menu)}
            {menu && menu.map(section => (
                <MenuSection
                    section={section}
                />
            ))}
        </div>
    );
  };
  
  export default MenuContent;
import React from 'react';

import MenuSection from "./MenuSection";

const MenuContent = ({menu}) => {

    return (
        <div className="content-wrapper">
            <div className="spacer"></div>
            {menu && menu.map(section => (
                <MenuSection
                    section={section}
                />
            ))}
        </div>
    );
  };
  
  export default MenuContent;
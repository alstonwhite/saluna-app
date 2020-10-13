import React from 'react';

import MenuSection from "./MenuSection";

import testSections from "../testSections";
import testItems from "../testItems";

const MenuContent = ({sections, items}) => {

    // if (sections) {
    //     sections.sort((a, b) => (a.order.localeCompare(b.order)));
    // }
    // console.log(sections)
    // console.log(testSections)
    // console.log(items)

    return (
        <div className="content-wrapper">
            <div className="spacer"></div>
            {/* <MenuSection
                section={testSections[0]}
                items={testItems}
            /> */}
            {sections && items && sections.map(section => (
                <MenuSection
                section={section}
                items={items}
                />
            ))}
        </div>
    );
  };
  
  export default MenuContent;
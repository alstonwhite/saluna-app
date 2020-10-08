import React from 'react';

import MenuSection from "./MenuSection";

import testSections from "../testSections";
import testItems from "../testItems";

const MenuContent = ({sections, items}) => {

    sections.sort((a, b) => (a.fields.order.localeCompare(b.fields.order)));
    console.log(sections)
    console.log(items)

    return (
        <div className="content-wrapper">
            <div className="spacer"></div>
            <MenuSection
                section={testSections[0]}
                items={testItems}
            />
            <div className="menu-section">
                {sections && sections.map(section => (
                    <div className="menu-section-title">
                    <h2>{section.sectionTitle}</h2>
                    </div>
            ))}
            </div>
            {/* {sections && sections.map(section => (
                <MenuSection
                section={section}
                items={items}
                />
            ))} */}
        </div>
    );
  };
  
  export default MenuContent;
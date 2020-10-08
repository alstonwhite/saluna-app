import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful'
// import logo from './logo.svg';
import logo from './saluna-logo.png';
import './App.css';

import Landing from "./landing/Landing";
import MenuSection from "./menu/MenuSection";
import MenuContent from './menu/MenuContent';
import HardcodeMenuContent from './menu/HardcodeMenuContent';

import testSections from "./testSections";
import testItems from "./testItems";


var client = contentful.createClient({
  space: 'z67ub1h0a7t4',
  accessToken: '-PTqI4a37RirY-az5ZzJe5nosyh_Z4w5feNnGe1J8U8' });


function App() {
  
  const [menuSections, setMenuSections] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  // const menuSections = [];
  // const menuItems = [];

  useEffect(() => {
    const sections = [];
    const items = [];
    client.getEntries().then(entries => {
      entries.items.forEach(entry => {
        if(entry.sys.contentType.sys.id==="menuSection" && entry.fields.active) {
          // menuSections.push(entry.fields);
          sections.push(entry.fields);
        }
        if(entry.sys.contentType.sys.id==="menuItem") {
          // menuItems.push(entry.fields);
          items.push(entry.fields)
        }
      })  
    })
    setMenuSections(sections);
    setMenuItems(items);
    // console.log(sections);
    // console.log(items);  
  }
  , [])

  // console.log(menuSections);
  // console.log(menuItems);

  function handleClick() {
    if (
      document.getElementById("landing") &&
      document.getElementById("main")
    ) {
        console.log("click");
        document.getElementById("landing").style.display = "none";
        document.getElementById("main").style.display = "flex";
    }
  }
  
  return (
    <div className="App">
      <Landing handleClick={handleClick}/>
      <div className="main-wrapper" id="main">
        <div className="header-wrapper">
          <img src={logo} className="header-logo" alt="logo" />
          <div className="header-title">
            <p className="header-title">Soluna Bar</p>
            <p className="header-subtitle">On Lake Burton</p>
          </div>
        </div>
        <MenuContent
          sections={menuSections}
          items={menuItems}
        />
        {/* <HardcodeMenuContent/> */}
        <div className="footer-wrapper">
        </div>
      </div>
    </div>
  );
}

export default App;

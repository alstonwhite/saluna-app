import React, { useState, useEffect } from 'react';
import logo from './saluna-logo.png';
import './App.css';

import Landing from "./landing/Landing";
import MenuContent from './menu/MenuContent';
import fetchContentful from "./fetchContentful";


function App() {
  
  const [menuSections, setMenuSections] = useState(undefined);
  const [menuItems, setMenuItems] = useState(undefined);

  useEffect(() => {
    const sections = [];
    const items = [];

    fetchContentful().then(entries => {
      entries.forEach(entry => {
        if(entry.sys.contentType.sys.id==="menuSection" && entry.fields.active) {
          sections.push(entry.fields)
        }
        if(entry.sys.contentType.sys.id==="menuItem" && entry.fields.active) {
          items.push(entry.fields)
        }
      })
      setMenuSections(sections);
      setMenuItems(items);
      });
  }, []); 

  function handleClick() {
    if (
      document.getElementById("landing") &&
      document.getElementById("main")
    ) {
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
        <div className="footer-wrapper">
        </div>
      </div>
    </div>
  );
}

export default App;

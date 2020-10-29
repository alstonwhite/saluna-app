import React, { useState, useEffect } from 'react';
import './App.css';

import Landing from "./landing/Landing";
import Menu from './menu/Menu';
import fetchContentful from "./fetchContentful";


function App() {
  
  const [menu, setMenu] = useState(undefined);
  const [page, setPage] = useState(true);

  useEffect(() => {
    const sections = [];
    const items = [];
    fetchContentful().then(entries => {
      entries.forEach(entry => {
        if(entry.sys.contentType.sys.id==="menuSection" && entry.fields.active) {
          sections.push(entry.fields);
        }
        if(entry.sys.contentType.sys.id==="menuItem" && entry.fields.active) {
          items.push(entry.fields)
        }
      })
      const menuArr = sections.sort((a, b) => (a.order > b.order) ? 1 : -1).map(item => {
        return {section: item, items: []}
      })
      items.forEach(item => {
        menuArr.forEach(section => {
          if (item.section.fields.sectionTitle === section.section.sectionTitle) {
            section.items.push(item)
          }
        })
      });
      setMenu(menuArr);
    });
  }, []); 


  function handleClick() {
    setPage(false);
  }
  
  
  return (
    <div className="App">
      {page ? <Landing 
        handleClick={handleClick}
        page={page}
      />
      : <Menu 
        menu={menu}
        page={page}
      /> }
    </div>
  );
}

export default App;

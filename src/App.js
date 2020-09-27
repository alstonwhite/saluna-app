import React from 'react';
// import logo from './logo.svg';
import logo from './saluna-logo.png';
import moon from './saluna-moon.png';
import sun from './saluna-sun.png';
import './App.css';

function App() {

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
      <div id="landing" className="landing-wrapper">
        <header className="App-header">
          <img src={moon} className="moon-logo" alt="moon" />
          <img src={sun} className="sun-logo" alt="sun" />
          <p className ="App-title">
            SOLUNA
          </p>
          <button type="button" className ="btn btn-enter" onClick={()=>handleClick()}>ENTER</button>
        </header>
      </div>
      <div className="main-wrapper" id="main">
        <div className="header-wrapper">
          <img src={logo} className="header-logo" alt="logo" />
          <div className="header-title">
            <p className="header-title">Soluna Bar</p>
            <p className="header-subtitle">On Lake Burton</p>
          </div>
        </div>
        <div className="content-wrapper">
          <div class="spacer"></div>
          <div className="menu-section">
            <div className="menu-section-title">
              <h2>Openers</h2>
            </div>
            <div className="menu-section-items">
              <div className="menu-section-item">
                <p className="menu-item-title">Moonrise Mimose</p>
                <p className="menu-item-description">Champagne + orange juice</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Hemingway Bloody Mary</p>
                <p className="menu-item-description"> Ernest Hemingway style with a pickle</p>
              </div>
            </div>
          </div>
          <div className="menu-section">
            <div className="menu-section-title">
              <h2>Daily Specials</h2>
            </div>
            <div className="menu-section-items">
              <div className="menu-section-item">
                <p className="menu-item-title">Lady Di's Cosmo</p>
                <p className="menu-item-description">Vodka, cranberry juice, lime juice<br></br>+ cointreau</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Moon Dance</p>
                <p className="menu-item-description">Don Q passion, peach schnapps, razzmatazz<br></br>sour mix + Sprite</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Burton Breeze</p>
                <p className="menu-item-description">Rum, banana rum, coconut sum,<br></br>apricot brandy + fruit punch</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Boathouse Sunset</p>
                <p className="menu-item-description">Rum, Don Q coco, mango puree,<br></br>pineapple juice + cranberry juice</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Patio Pleaser</p>
                <p className="menu-item-description">Vodka, orange juice, cranberry juice<br></br>+ pineapple juice</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Lake Water</p>
                <p className="menu-item-description">Melon liquor, coconut rum<br></br>+ Sprite</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Lake Monster</p>
                <p className="menu-item-description">Rum, pineapple juice, orange juice<br></br>+ blue curacao</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">MMD (Make Me Disappear)</p>
                <p className="menu-item-description">Vodka, kahlua<br></br>+ club soda</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">White House Wedge</p>
                <p className="menu-item-description">Vodka, Fresca + lemon juice</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Orange Vod-juice-ka</p>
                <p className="menu-item-description">Vodka + orange juice</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Chi Chi</p>
                <p className="menu-item-description">Vodka, blue curacao, melon liquor<br></br>+ pineapple juice</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Whiskey Tango Foxtrot (WTF)</p>
                <p className="menu-item-description">Whiskey, dry vermouth<br></br>+ pineapple juice</p>
              </div>
            </div>
          </div>
          <div className="menu-section">
            <div className="menu-section-title">
              <h2>Closers</h2>
            </div>
            <div className="menu-section-items">
              <div className="menu-section-item">
                <p className="menu-item-title">Scotch</p>
                <p className="menu-item-description">Blends for all reasons;<br></br> Blends for all seasons</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Rich + Miserable</p>
                <p className="menu-item-description">Vodka, Baileys, Kahlua, Godiva<br></br>+ Cream</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Bushwacker</p>
                <p className="menu-item-description">Rum, vodka, Baileys, Kahlua, Godiva,<br></br>Amaretto, cream of coconut, etc.</p>
              </div>
              <div className="menu-section-item">
                <p className="menu-item-title">Zarpe</p>
                <p className="menu-item-description">Kahlua, vodka + Cream;<br></br>Finished with whipped cream</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">
        </div>
      </div>
    </div>
  );
}

export default App;

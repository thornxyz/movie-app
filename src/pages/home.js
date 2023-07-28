import "./home.css";
import React, {useState} from "react";
import wandavision from './images/wandavision.jpg';
import blackpanther from './images/blackpanther.jpeg';
import doctorstrange from './images/doctorstrange.jpg';
import blackwidow from './images/blackwidow.jpg';
import agatha from './images/agatha.jpg';
import msmarvel from './images/msmarvel.jpg';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import {RxCross2} from "react-icons/rx";
import phase1 from './images/phase1.jpg';
import phase2 from './images/phase2.jpg';
import phase3 from './images/phase3.jpg';
import phase4 from './images/phase4.jpg';


const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`;

const ioniconsESM = document.createElement('script');
ioniconsESM.type = 'module';
ioniconsESM.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.head.appendChild(ioniconsESM);

const ioniconsNomodule = document.createElement('script');
ioniconsNomodule.nomodule = true;
ioniconsNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.head.appendChild(ioniconsNomodule);

export default function Home() {
  const [sidebar, setSidebar]=useState(false)
  const showSidebar = () => setSidebar(!sidebar)
    return (
      <div className="page-container">
        <IconContext.Provider value={{color: '#000000'}}>
        <style>{fontImport}</style>
  
        <div className="container">


          <div className="menu">
            <Link to="#" className="menu-link">
            <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
          </div>
          <nav className={sidebar?'nav-menu active':'nav-menu'}>
            <div className="nav-menu-items" >
              <div className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <RxCross2 onClick={showSidebar}/>
                    </Link>
              </div>
              <div className="wanda">
                <div className="wanda-pic-wrapper"></div>
              </div>
              <div className="phases">
                <div className="phase1">
                  <Link to="/phase1" >
                  <img src={phase1} className= "phase1-pic" alt="phase1"/>
                  <div className="text-1">Phase 1</div>
                  </Link>
                </div>
                <div className="phase2">
                  <Link to="/phase2">
                  <img src={phase2} className= "phase2-pic" alt="phase2"/>
                  <div className="text-2">Phase 2</div>
                  </Link>
                </div>
                <div className="phase3">
                  <Link to="/phase3">
                <img src={phase3} className= "phase3-pic" alt="phase3"/>
                <div className="text-3">Phase 3</div>
                </Link>
                </div>
                <div className="phase4">
                  <Link to="/phase4">
                <img src={phase4} className= "phase4-pic" alt="phase4"/>
                <div className="text-4">Phase 4</div>
                </Link>
                </div>
                <div className="close" onClick={showSidebar} >
                  CLOSE
                </div>
              </div>
            </div>
          </nav>



          <div className="scanner">
            <ion-icon name="scan-outline"></ion-icon>
          </div>
  
          <div className="searchtext">
            <h4>Search</h4>
          </div>
  
          <div className="search-bar">
            <i className="search-icon">
              <ion-icon name="search-outline"></ion-icon>
            </i>
            <input type="search" className="search-input" id="search" />
            <i className="camera">
              <ion-icon name="camera-outline"></ion-icon>
            </i>
          </div>
          
        </div>
  
        <div className="popular-text">
          <h4>Popular</h4>
        </div>
        <div className="firstrow">
          <img className="blackpanther" src={blackpanther} alt="blackpanther" />
          <img className="wandavision" src={wandavision} alt="wandavision" />
        </div>
  
        <div className="comingsoon-text">
          <h4>Coming Soon</h4>
        </div>
        <div className="secondrow">
          <img className="doctorstrange" src={doctorstrange} alt="doctorstrange" />
          <img className="blackwidow" src={blackwidow} alt="blackwidow" />
        </div>
  
        <div className="mustwatch-text">
          <h4>Must Watch</h4>
        </div>
        <div className="thirdrow">
          <img className="agatha" src={agatha} alt="agatha" />
          <img className="msmarvel" src={msmarvel} alt="msmarvel" />
        </div>
        </IconContext.Provider>
      </div>
    );
  }
  
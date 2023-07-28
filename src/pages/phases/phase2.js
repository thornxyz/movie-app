import './phase.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
import iron2 from './pics/iron2.jpg';
import thor2 from './pics/thor2.jpg';
import cap2 from './pics/cap2.jpg';
import avg2 from './pics/avg2.jpg';
import gog from './pics/gog.jpg';
import atm from './pics/atm1.jpg';

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`;

const ioniconsESM = document.createElement('script');
ioniconsESM.type = 'module';
ioniconsESM.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.head.appendChild(ioniconsESM);

const ioniconsNomodule = document.createElement('script');
ioniconsNomodule.nomodule = true;
ioniconsNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.head.appendChild(ioniconsNomodule);

export default function Phase1Page(){
    return(
        <div className="page-container">
                    <IconContext.Provider value={{color: '#000000'}}>
            <style>{fontImport}</style>
        <div className="back-icon">
            <Link to="/">
            <FaChevronLeft/>
            </Link>
        </div>
        <div className='top'>
            Phase 2
        </div>
        <div className='row1'>
            <img src={iron2} alt="iron2" className='phaseimg'/>
            <img src={thor2} alt='thor2' className='phaseimg'/>
        </div>
        <div className='row2'>
            <img src={cap2} alt="cap2" className='phaseimg'/>
            <img src={gog} alt='gog' className='phaseimg'/>
        </div>
        <div className='row3'>
            <img src={atm} alt="atm" className='phaseimg'/>
            <img src={avg2} alt='avg2' className='phaseimg'/>
        </div>
        </IconContext.Provider>
        </div>
    );
}



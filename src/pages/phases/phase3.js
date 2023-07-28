import './phase.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
import bp from './pics/bp1.jpg';
import drs from './pics/drs1.jpg';
import cap3 from './pics/cap3.jpg';
import avg3 from './pics/avg3.jpg';
import gog2 from './pics/gog2.jpg';
import atm2 from './pics/atm2.jpg';

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
            Phase 3
        </div>
        <div className='row1'>
            <img src={cap3} alt="cap3" className='phaseimg'/>
            <img src={drs} alt='drs' className='phaseimg'/>
        </div>
        <div className='row2'>
            <img src={gog2} alt="gog2" className='phaseimg'/>
            <img src={bp} alt='bp' className='phaseimg'/>
        </div>
        <div className='row3'>
            <img src={avg3} alt="avg3" className='phaseimg'/>
            <img src={atm2} alt='atm2' className='phaseimg'/>
        </div>
        </IconContext.Provider>
        </div>
    );
}



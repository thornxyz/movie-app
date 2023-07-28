import './phase.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
import iron1 from './pics/ironman1.jpg';
import thor1 from './pics/thor1.jpg';
import cap1 from './pics/captain1.jpg';
import avg1 from './pics/avengers1.jpg';
import hulk from './pics/hulk.jpg';
import ph1 from './pics/ph1.jpg';

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
            Phase 1
        </div>
        <div className='row1'>
            <img src={iron1} alt="iron1" className='phaseimg'/>
            <img src={thor1} alt='thor1' className='phaseimg'/>
        </div>
        <div className='row2'>
            <img src={cap1} alt="cap1" className='phaseimg'/>
            <img src={avg1} alt='avg1' className='phaseimg'/>
        </div>
        <div className='row3'>
            <img src={hulk} alt="hulk" className='phaseimg'/>
            <img src={ph1} alt='ph1' className='phaseimg'/>
        </div>
        </IconContext.Provider>
        </div>
    );
}



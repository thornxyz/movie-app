import './phase.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
import bw from './pics/bw.jpg';
import lok from './pics/lok.jpg';
import wv from './pics/wv.jpg';
import falc from './pics/falc.jpg';
import eter from './pics/ete.jpg';
import sci from './pics/sci.jpg';

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
            Phase 4
        </div>
        <div className='row1'>
            <img src={bw} alt="bw" className='phaseimg'/>
            <img src={lok} alt='lok' className='phaseimg'/>
        </div>
        <div className='row2'>
            <img src={wv} alt="wv" className='phaseimg'/>
            <img src={falc} alt='falc' className='phaseimg'/>
        </div>
        <div className='row3'>
            <img src={eter} alt="eter" className='phaseimg'/>
            <img src={sci} alt='sci' className='phaseimg'/>
        </div>
        </IconContext.Provider>
        </div>
    );
}




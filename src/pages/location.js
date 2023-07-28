import map from './images/map.jpg';
import './location.css';

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`;

const ioniconsESM = document.createElement('script');
ioniconsESM.type = 'module';
ioniconsESM.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.head.appendChild(ioniconsESM);

const ioniconsNomodule = document.createElement('script');
ioniconsNomodule.nomodule = true;
ioniconsNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.head.appendChild(ioniconsNomodule);

export default function Location(){
    return(
        <div className='page'>
            <style>{fontImport}</style>
            <div className='searchbar'>
                <i className='menu-icon'>
                    <ion-icon name="menu-outline"></ion-icon>
                </i>
                <input type="search" className="search-input" id="search" />
                <i className='down-icon'>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </i>
            </div>
            <div className='map-container'>
            <img className='map' src={map} alt="map"/>
            </div>
            <div className='box'>
                <div className='heading'>
                    Nearby Theaters: 
                </div>
                <div className='mall1'>
                    Nexus Mall
                    <span className='dist1'> 12Km</span>
                </div>  
                <div className='mall2'>
                    Forum Mall
                    <span className='dist2'> 4Km</span>
                </div>
                <div className='mall3'>
                    IMAX theaters
                    <span className='dist3'> 8Km</span>
                </div>
                <div className='mall4'>
                    Central Mall
                    <span className='dist4'> 11Km</span>
                </div>
            </div>
        </div>
    );
}
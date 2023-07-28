import './ticket.css';
import ticket from './images/ticket.jpg';

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`;

const ioniconsESM = document.createElement('script');
ioniconsESM.type = 'module';
ioniconsESM.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.head.appendChild(ioniconsESM);

const ioniconsNomodule = document.createElement('script');
ioniconsNomodule.nomodule = true;
ioniconsNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.head.appendChild(ioniconsNomodule);


export default function Ticket(){
    return(
        <div className='page'>
            <style>{fontImport}</style>
            <div className='icons'>
                <div className='share'>
                    <ion-icon name="share-social-outline"></ion-icon>
                </div>
                <div className='scan'>
                    <ion-icon name="scan-outline"></ion-icon>
                </div>
            </div>

            <div className='ticket-heading'>
                Mobile Ticket
            </div>
            <div className='ticket-text'>
                Simply scan the barcode to access your one time movie play
            </div>
            <img className="ticket-img" src={ticket} alt="ticket"/>
        </div>
    );
}
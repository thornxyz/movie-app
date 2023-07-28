import './user.css';
import scratch from './images/scratch.jpg';

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`;

const ioniconsESM = document.createElement('script');
ioniconsESM.type = 'module';
ioniconsESM.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.head.appendChild(ioniconsESM);

const ioniconsNomodule = document.createElement('script');
ioniconsNomodule.nomodule = true;
ioniconsNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.head.appendChild(ioniconsNomodule);

export default function User(){
    return (
        <div className='pagecontainer'>
            <style>{fontImport}</style>
            <div className='menuicon'>
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div className='hi'>
                HI Wanda!!
            </div>


            <div className='buttons'>
                <div className='box1'>
                    <div className='text1'>
                        Your History
                    </div>
                </div>
                <div className='box2'>
                    <div className='text2'>
                        My Points
                    </div>
                </div>
                <div className='box3'>
                    <div className='text3'>
                        Contact Us
                    </div>
                </div>
            </div>

            <div className='blahblah'>
                Scratch for a chance to win a free movie ticket
            </div>

            <img className='scratch' src={scratch} alt="scratch"/>
        </div>
    );
}
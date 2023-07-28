import './nav.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ioniconsESM = document.createElement('script');
ioniconsESM.type = 'module';
ioniconsESM.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.head.appendChild(ioniconsESM);

const ioniconsNomodule = document.createElement('script');
ioniconsNomodule.nomodule = true;
ioniconsNomodule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.head.appendChild(ioniconsNomodule);

export default function Navbar(){

    return(
        <div className="navigation">
            <ul>
                <CustomLink to="/">
                    <span className="icon">
                        <ion-icon id="home-icon" name="home-outline"></ion-icon>
                    </span>
                </CustomLink>
                <CustomLink to="/location">
                    <span className="icon">
                        <ion-icon id="location-icon" name="location-outline"></ion-icon>
                    </span>
                </CustomLink>
                <CustomLink to="/ticket">
                    <span className="icon">
                        <ion-icon id="ticket-icon" name="ticket-outline"></ion-icon>
                    </span>
                </CustomLink>
                <CustomLink to="/user">
                    <span className="icon">
                        <ion-icon id="person-icon" name="person-outline"></ion-icon>
                    </span>
                </CustomLink>
                <div className="indicator"></div>
            </ul>
        </div>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname,end:true})
    return(
        <li className={`list ${isActive ? "active" : ""}`}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

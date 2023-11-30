import React, {useEffect} from 'react';
import Logout from '../LogOut';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const authTokenKey = 'authToken';

    const token = localStorage.getItem(authTokenKey);


    return (
        <>
            <nav className="navbar" style={{'backgroundColor':'#198754'}}>
                <div className="container">
                    <a className="navbar-brand fw-bolder white-text"  href="/">
                            MAYNOOTH
                    </a>
                </div>
                <div>
                { token && <Logout/>}
                </div>
            </nav>
        </>
    );
}

export default Header;
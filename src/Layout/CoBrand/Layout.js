import React, { useRef } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import './../Layout.scss';
import Logo from './../../assets/img/Logo_1.png';
import Navigations from '../../components/Navigations/Navigations';
import { MenuCoBranding } from './../../components/Navigations/routes';
import { useDetectOutsideClick } from './../../hook/useDetectOutsideClick';

import { FiBell, FiUser, FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Layout({
    children,
    location
}) {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClickDropDown = () => setIsActive(!isActive);

    return (
       <div className="Layout">
            <header className="Header">
                <img 
                    src={Logo} alt="Logo Ruang Keluarga" 
                    className="Header__img"
                />
                <div className="Header__infoaccount">
                    <div className="Header__notification">
                        <FiBell className="Header__icon" />
                    </div>
                    <button className="Header__activeUser" onClick={onClickDropDown}>
                        <FiUser className={`Header__icon ${isActive && 'Header__icon__active'}`} />
                        <span>Bimbel Defhi</span>
                        {isActive ? <FiChevronUp /> : <FiChevronDown /> }  
                    </button>
                    <nav 
                        ref={dropdownRef}
                        className={`Menudropdown ${isActive ? 'active' : 'inactive'}`}
                    >
                        <ul>
                            <li>
                                <NavLink to="/">Bantuan</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Setting</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Logout</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {location.pathname !== '/program/add' && <Navigations MenuItems={MenuCoBranding} /> }
            
            
            <main className={
                location.pathname !== '/program/add' ? 'Main' : 'FullMain'
            }>
                {children}
            </main>
       </div>
    )
}

export default withRouter(Layout)

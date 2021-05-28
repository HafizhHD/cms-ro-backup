import React, { useRef } from 'react';
import './../Layout.scss';
import Logo from './../../assets/img/Logo_1.png';
import Navigations from '../../components/Navigations/Navigations';
import { MenuCoBranding } from './../../components/Navigations/routes';
import { useDetectOutsideClick } from './../../hook/useDetectOutsideClick';

import { FiBell, FiUser, FiChevronDown, FiChevronUp } from 'react-icons/fi'

function Layout({
    children
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
                                <a href="#">Bantuan</a>
                            </li>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">Setting</a>
                            </li>
                            <li>
                                <a href="#">Logout</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Navigations MenuItems={MenuCoBranding} />
            <main className="Main">
                {children}
            </main>
       </div>
    )
}

export default Layout

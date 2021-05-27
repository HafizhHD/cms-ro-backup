import React from 'react';
import './../Layout.scss';
import Logo from './../../assets/img/Logo_1.png';
import Navigations from '../../components/Navigations/Navigations';
import { MenuCoBranding } from './../../components/Navigations/routes';

import { FiBell, FiUser, FiChevronDown } from 'react-icons/fi'

function Layout({
    children
}) {
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
                    <div className="Header__activeUser">
                        <FiUser className="Header__icon" />
                        <span>Bimbel Defhi</span>
                        <FiChevronDown />
                    </div>
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

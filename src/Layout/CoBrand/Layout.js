import React from 'react';
import './Layout.scss';
import Logo from './../../assets/img/Logo_1.png';
import Navigations from '../../components/Navigations/Navigations';
import { MenuCoBranding } from './../../components/Navigations/routes';

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
            </header>
            <Navigations MenuItems={MenuCoBranding} />
            <main className="Main">
                {children}
            </main>
       </div>
    )
}

export default Layout

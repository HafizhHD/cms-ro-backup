import React from 'react';
import './Layout.scss';
import Logo from './../assets/img/Logo_1.png';
import { FiActivity, FiEdit, FiHome, FiImage, FiMapPin, FiTool  } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

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
            <aside className="Aside">
                <ul className="Aside__Nav">
                    <li className="Aside__Nav_item">
                        <NavLink 
                            exact
                            className="Aside__Nav_item-link" 
                            to="/">
                            <FiHome className="Aside__Nav_item-icon" />
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li className="Aside__Nav_item">
                        <NavLink to="/report" className="Aside__Nav_item-link" href="#">
                            <FiEdit className="Aside__Nav_item-icon" />
                            <p>Report</p>
                        </NavLink>
                    </li>
                    <li className="Aside__Nav_item">
                        <NavLink to="/program" className="Aside__Nav_item-link" href="#">
                            <FiActivity className="Aside__Nav_item-icon" />
                            <p>Program</p>
                        </NavLink>
                    </li>
                    <li className="Aside__Nav_item">
                        <NavLink to="/content" className="Aside__Nav_item-link" href="#">
                            <FiImage className="Aside__Nav_item-icon" />
                            <p>Content</p>
                        </NavLink>
                    </li>
                    <li className="Aside__Nav_item">
                        <NavLink to="/redzone" className="Aside__Nav_item-link" href="#">
                            <FiMapPin className="Aside__Nav_item-icon" />
                            <p>RedZone</p>
                        </NavLink>
                    </li>
                    <li className="Aside__Nav_item">
                        <NavLink to="/setting" className="Aside__Nav_item-link" href="#">
                            <FiTool className="Aside__Nav_item-icon" />
                            <p>Setting</p>
                        </NavLink>
                    </li>
                </ul>
            </aside>
            <main className="Main">
                {children}
            </main>
       </div>
    )
}

export default Layout

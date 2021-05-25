import React from 'react';
import './Layout.scss';
import Logo from './../assets/img/Logo_1.png';
import { FiActivity, FiEdit, FiHome, FiImage, FiMapPin, FiTool  } from 'react-icons/fi'

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
                        <a className="Aside__Nav_item-link active" href="#">
                            <FiHome className="Aside__Nav_item-icon" />
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li className="Aside__Nav_item">
                        <a className="Aside__Nav_item-link" href="#">
                            <FiEdit className="Aside__Nav_item-icon" />
                            <p>Report</p>
                        </a>
                    </li>
                    <li className="Aside__Nav_item">
                        <a className="Aside__Nav_item-link" href="#">
                            <FiActivity className="Aside__Nav_item-icon" />
                            <p>Program</p>
                        </a>
                    </li>
                    <li className="Aside__Nav_item">
                        <a className="Aside__Nav_item-link" href="#">
                            <FiImage className="Aside__Nav_item-icon" />
                            <p>Content</p>
                        </a>
                    </li>
                    <li className="Aside__Nav_item">
                        <a className="Aside__Nav_item-link" href="#">
                            <FiMapPin className="Aside__Nav_item-icon" />
                            <p>RedZone</p>
                        </a>
                    </li>
                    <li className="Aside__Nav_item">
                        <a className="Aside__Nav_item-link" href="#">
                            <FiTool className="Aside__Nav_item-icon" />
                            <p>Setting</p>
                        </a>
                    </li>
                </ul>
            </aside>
            <main className="Main">
                Content
            </main>
       </div>
    )
}

export default Layout

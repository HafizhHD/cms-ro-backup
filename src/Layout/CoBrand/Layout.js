import React, { useRef, useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import './../Layout.scss';
import Logo from './../../assets/img/Logo_2.png';
import Navigations from '../../components/Navigations/Navigations';
import { MenuCoBranding } from './../../components/Navigations/routes';
import { useDetectOutsideClick } from './../../hook/useDetectOutsideClick';

import { FiBell, FiUser, FiChevronDown, FiChevronUp, FiXCircle } from 'react-icons/fi';

import DashboardHelp from '../../components/UI/Help/DashboardHelp/DashboardHelp';

function Layout({
    children,
    location,
    logoutHandler
}) {



    //dropdown profile
    const dropdownRefProfile = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRefProfile, false);
    const onClickDropDown = () => setIsActive(!isActive);

    const dropdownRefNotification = useRef(null);
    const [isOpenNotif, setIsOpenNotif] = useDetectOutsideClick(dropdownRefNotification, false);
    const onClickNotifButton = () => setIsOpenNotif(true)

    const onLogoutHandler = (e) => {
        e.preventDefault();
        onClickDropDown()
        logoutHandler()
    }

    const userData = JSON.parse(localStorage.getItem('userData'));

    const [showHelp, setShowHelp] = useState(false);

    return (
        <>
        {showHelp ? <DashboardHelp /> : null}
        {showHelp ? (
            <button 
                className="CloseHelp"
                onClick={() => {
                setShowHelp(false);
            }}><FiXCircle/> </button>
        ) : null}
       <div className="Layout">
            <header className="Header">
                <NavLink to="/">
                    <img 
                        src={Logo} alt="Logo Ruang Keluarga" 
                        className="Header__img"
                    />
                </NavLink>
                <div className="Header__infoaccount">
                    <div className="Header__infoaccount__Notification">
                        <div className="Header__notification-btn" 
                            onClick={onClickNotifButton}
                        >
                            <FiBell className={`Header__icon ${isOpenNotif && 'Header__icon__active'}`} />
                            {/*<div className="Header__notification-badge">6</div>*/}
                        </div>
                        <nav 
                            ref={dropdownRefNotification}
                            className={`Menudropdown ${isOpenNotif ? 'active' : 'inactive'}`}
                        >
                            <ul>
                                <li>
                                    <NavLink to="/">
                                        Anandosatria@gmail telah berlangganan
                                    </NavLink>
                                    <p>12:23 - 31 Mei 2021</p>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        galih@gmail telah berlangganan
                                    </NavLink>
                                    <p>12:23 - 31 Mei 2021</p>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        wahyu@gmail telah berlangganan
                                    </NavLink>
                                    <p>12:23 - 31 Mei 2021</p>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        dimas@gmail telah berlangganan
                                    </NavLink>
                                    <p>12:23 - 31 Mei 2021</p>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="Header__infoaccount__profile">
                        <button className="Header__activeUser" onClick={onClickDropDown}>
                            <img src={userData.thumbnail} className={`Header__profileImg ${isActive && 'Header__profileImg__active'}`} />
                            <span>{userData.cobrandName}</span>
                            {isActive ? <FiChevronUp /> : <FiChevronDown /> }  
                        </button>
                        <nav 
                            ref={dropdownRefProfile}
                            className={`Menudropdown ${isActive ? 'active' : 'inactive'}`}
                        >
                            <ul>
                                <li>
                                    <a href="#/"
                                    onClick={() => {
                                        setShowHelp(true);
                                    }}>Bantuan</a>
                                </li>
                                <li>
                                    <NavLink to="/">Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/setting" onClick={onClickDropDown}>Setting</NavLink>
                                </li>
                                <li>
                                    <a href="true" onClick={onLogoutHandler} >Logout</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {   
              
                //['/program/add'].indexOf(location.pathname) &&
                <Navigations MenuItems={MenuCoBranding} /> 
            }
            
            
            {//<main className={ location.pathname !== '/program/add' ? 'Main' : 'FullMain'}>
                }
            <main className='Main'>
                {children}
            </main>
       </div>
       </>
    )
}

export default withRouter(Layout)

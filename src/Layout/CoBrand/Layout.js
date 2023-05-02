import React, { useRef, useState, useEffect } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import './../Layout.scss';
import Logo from './../../assets/img/Logo_1.png';
import Logo2 from './../../assets/img/Logo_4.png'
import Navigations from '../../components/Navigations/Navigations';
import { MenuCoBranding } from './../../components/Navigations/routes';
import { useDetectOutsideClick } from './../../hook/useDetectOutsideClick';

import { FiBell, FiUser, FiChevronDown, FiChevronUp, FiXCircle, FiMenu, FiSend } from 'react-icons/fi';

import DashboardHelp from '../../components/UI/Help/DashboardHelp/DashboardHelp';
import Alert from '../../components/UI/Alert/Alert';

function Layout({
    children,
    location,
    logoutHandler,
    showAlert,
    alertType,
    alertMessage
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

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));

    const [showHelp, setShowHelp] = useState(false);

    const [isScreenBig, setScreenBig] = useState(window.innerWidth >= 900);
    const [isShowAside, setShowAside] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 900) setScreenBig(false);
            else setScreenBig(true);
        });
    }, [isScreenBig, isShowAside]);

    useEffect(() => {
        if(alertMessage === 'Profil berhasil diubah.' && showAlert) {
            setUserData(JSON.parse(localStorage.getItem('userData')));
        }
    }, [alertMessage, showAlert]);

    return (
        <>
        {showHelp ? <DashboardHelp /> : null}
        {showHelp ? (
            <button 
                className="CloseHelpDashboard"
                onClick={() => {
                setShowHelp(false);
                document.getElementsByTagName('main')[0].style.overflowY = 'visible';
            }}><FiXCircle/> </button>
        ) : null}
        {showAlert && alertType ? <Alert type={alertType} message={alertMessage}/> : null}
        <div className="Layout">
            <header className="Header">
                {isScreenBig ? null : (
                    <button className="Header__menu" onClick={(e) => {
                        if(isShowAside) setShowAside(false);
                        else setShowAside(true);
                    }}>
                        <FiMenu/>
                    </button>
                )}
                <NavLink to="/">
                    <img 
                        src={Logo2} alt="Logo Ruang Keluarga" 
                        className="Header__img"
                    />
                </NavLink>
                <div className="Header__infoaccount">
                    {/* <div className="Header__infoaccount__Notification">
                        <div className="Header__notification-btn" 
                            onClick={onClickNotifButton}
                        >
                            <FiSend className={`Header__icon ${isOpenNotif && 'Header__icon__active'}`} />
                            <div className="Header__notification-badge">6</div>
                        </div>
                        <nav 
                            ref={dropdownRefNotification}
                            className={`Menudropdown ${isOpenNotif ? 'active' : 'inactive'}`}
                        >
                            <ul>
                                <li>
                                    <NavLink to="/">
                                        Broadcast telah dikirimkan kepada semua pengguna.
                                    </NavLink>
                                    <p>12:23 - 31 Maret 2022</p>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        Pesan bantuan telah dikirimkan kepada ricko@ide2sen.com
                                    </NavLink>
                                    <p>12:03 - 31 Januari 2022</p>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        BUAT PESAN BARU
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div> */}

                    <div className="Header__infoaccount__profile">
                        <button className="Header__activeUser" onClick={onClickDropDown}>
                            <img src={userData.thumbnail} className={`Header__profileImg ${isActive && 'Header__profileImg__active'}`} />
                            <span>{userData.userName}</span>
                            {isActive ? <FiChevronUp /> : <FiChevronDown /> }  
                        </button>
                        <nav 
                            ref={dropdownRefProfile}
                            className={`Menudropdown ${isActive ? 'active' : 'inactive'}`}
                        >
                            <ul>
                                <li>
                                    <NavLink to={location.pathname}
                                    onClick={() => {
                                        setShowHelp(true);
                                        onClickDropDown();
                                        document.getElementsByTagName('main')[0].style.overflowY = 'hidden';
                                    }}>Bantuan</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tools/admin-staff" onClick={onClickDropDown}>Setting</NavLink>
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
                (isScreenBig || isShowAside) && <Navigations MenuItems={MenuCoBranding()} ShowAside={setShowAside} /> 
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

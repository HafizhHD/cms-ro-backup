import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigations.scss';
import {FaWhatsapp} from 'react-icons/fa'

function Navigations({ MenuItems, ShowAside }) {
    return (
        <aside className="Aside">
            <ul className="Aside__Nav">
                {MenuItems.map((item, i) => {
                    return (
                        <li key={i} className="Aside__Nav_item">
                            {item.path === '/' ? (
                                <NavLink exact to={item.path} className="Aside__Nav_item-link" onClick={() => {
                                    window.scroll(0,0);
                                    if(window.innerWidth < 900) ShowAside(false);
                                }}>
                                    {item.icon}
                                    <p>{item.pathName}</p>
                                </NavLink>
                            ) : (
                                <NavLink to={item.path} className="Aside__Nav_item-link" onClick={() => {
                                    window.scroll(0,0);
                                    if(window.innerWidth < 900) ShowAside(false);
                                }}>
                                    {item.icon}
                                    <p>{item.pathName}</p>
                                </NavLink>
                            )}
                        </li>
                    )
                })}
            </ul>
            {/* <a className="Aside__Nav" href='http://wa.me/628119004410' target="_blank"><FaWhatsapp className='whatshap'/> Need Help? Click Here!</a> */}
        </aside>
    )
}

export default Navigations

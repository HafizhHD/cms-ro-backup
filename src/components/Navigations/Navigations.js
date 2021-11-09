import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigations.scss';


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
        </aside>
    )
}

export default Navigations

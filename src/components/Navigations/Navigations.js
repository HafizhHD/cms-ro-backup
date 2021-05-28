import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigations.scss';


function Navigations({ MenuItems }) {
    return (
        <aside className="Aside">
            <ul className="Aside__Nav">
                {MenuItems.map((item, i) => {
                    return (
                        <li key={i} className="Aside__Nav_item">
                            <NavLink exact to={item.path} className="Aside__Nav_item-link">
                                {item.icon}
                                <p>{item.pathName}</p>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Navigations

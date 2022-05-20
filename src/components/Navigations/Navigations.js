import React, {useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigations.scss';
import {FaWhatsapp} from 'react-icons/fa'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Navigations({ MenuItems, ShowAside }) {
    const currentLocation = useLocation();
    console.log(currentLocation);

    const [isActive, setActive] = useState({path: '', active: false});

    return (
        <aside className="Aside">
            <ul className="Aside__Nav">
                {MenuItems.map((item, i) => {
                    console.log(item.path);
                    return (
                        <li key={i} className="Aside__Nav_item">
                            {item.children == null ? 
                                item.path === '/' ? (
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
                                        {isActive.path === item.path && isActive.active === true ? (
                                            <FiChevronUp />
                                        ) : <FiChevronDown />}
                                    </NavLink>
                                ) :
                            (
                                <>
                                    <NavLink to={currentLocation.pathname} className="Aside__Nav_item-disabled" onClick={() => {
                                        {
                                            var pairActive = {}
                                            const itemString = item.path;
                                            if(isActive.path != itemString)
                                                pairActive = {path: itemString, active: true};
                                            else {
                                                if(isActive.active === true) pairActive = {path: itemString, active: false};
                                                else pairActive = {path: itemString, active: true};
                                            }
                                            setActive(pairActive);
                                        }
                                    }}>
                                        {item.icon}
                                        <p>{item.pathName}</p>
                                        {isActive.path === item.path && isActive.active === true ?
                                            (<FiChevronUp className="Aside__Nav_item-disabled-icon"/>) :
                                            (<FiChevronDown className="Aside__Nav_item-disabled-icon"/>)}
                                    </NavLink>
                                    {isActive.path === item.path && isActive.active === true ? 
                                        item.children.map((x, idx) => {
                                            console.log(x.path);
                                            
                                            return (
                                                <li key={item.path + idx} className="Aside__Nav_item">
                                                    <NavLink to={item.path + x.path} className="Aside__Nav_item-children" onClick={() => {
                                                        window.scroll(0,0);
                                                        if(window.innerWidth < 900) ShowAside(false);
                                                    }}>
                                                        {x.icon}
                                                        <p>{x.pathName}</p>
                                                    </NavLink>
                                                </li>
                                            )
                                        }) : null}
                                </>
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

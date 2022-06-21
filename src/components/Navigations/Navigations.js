import React, {useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigations.scss';
import {FaWhatsapp} from 'react-icons/fa'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Navigations({ MenuItems, ShowAside }) {
    const currentLocation = useLocation();
    console.log("Current location:", currentLocation);
    console.log('Menu items', MenuItems);

    const [isActive, setActive] = useState({path: currentLocation.pathname, active: true});
    const [isChildActive, setChildActive] = useState({path: currentLocation.pathname, active: true});

    return (
        <aside className="Aside">
            <ul className="Aside__Nav">
                {MenuItems.map((item, i) => {
                    console.log(item.path);
                    return (
                        <li key={i} className="Aside__Nav_item">
                            {!item.children ? 
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
                                                    {!x.children ? (
                                                        <NavLink to={item.path + x.path} className="Aside__Nav_item-children" onClick={() => {
                                                            window.scroll(0,0);
                                                            if(window.innerWidth < 900) ShowAside(false);
                                                        }}>
                                                            {x.icon}
                                                            <p>{x.pathName}</p>
                                                        </NavLink>
                                                    ) : (
                                                        <>
                                                            <NavLink to={currentLocation.pathname} className="Aside__Nav_item-disabled-children" onClick={() => {
                                                                {
                                                                    var pairActive = {}
                                                                    const itemString = item.path + x.path;
                                                                    if(isChildActive.path != itemString)
                                                                        pairActive = {path: itemString, active: true};
                                                                    else {
                                                                        if(isChildActive.active === true) pairActive = {path: itemString, active: false};
                                                                        else pairActive = {path: itemString, active: true};
                                                                    }
                                                                    setChildActive(pairActive);
                                                                }
                                                            }}>
                                                                {x.icon}
                                                                <p>{x.pathName}</p>
                                                                {isChildActive.path === item.path + x.path && isChildActive.active === true ?
                                                                    (<FiChevronUp className="Aside__Nav_item-disabled-icon"/>) :
                                                                    (<FiChevronDown className="Aside__Nav_item-disabled-icon"/>)}
                                                            </NavLink>
                                                            {isChildActive.path === item.path + x.path && isChildActive.active === true ? 
                                                                x.children.map((y, idx) => {
                                                                    console.log(y.path);
                                                                    
                                                                    return (
                                                                        <li key={item.path + x.path + idx} className="Aside__Nav_item">
                                                                            <NavLink to={item.path + x.path + y.path} className="Aside__Nav_item-children-children" onClick={() => {
                                                                                window.scroll(0,0);
                                                                                if(window.innerWidth < 900) ShowAside(false);
                                                                            }}>
                                                                                {y.icon}
                                                                                <p>{y.pathName}</p>
                                                                            </NavLink>
                                                                            
                                                                        </li>
                                                                    )
                                                                }) : null}
                                                        </>
                                                    )}
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

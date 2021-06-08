import React from 'react';
import { NavLink } from 'react-router-dom';
import './Heading.scss';

function Heading({ headingName, routes = [] }) {
    
    return (
        <div className="Heading">
            <h1>{headingName}</h1>
            <ul className="Heading__breadcumb">
                {routes.length > 0 && routes.map((item, i) => {
                    if(item.path){
                        return <li className="Heading__breadcumb-item" key={i}><NavLink exact to={item.path}>{item.name}</NavLink> </li>
                    }else{
                        return <li className="Heading__breadcumb-item" key={i}> <span>{item.name}</span> </li>
                    }
                })}
            </ul>
        </div>
    )
}

export default Heading

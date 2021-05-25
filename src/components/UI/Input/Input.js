import React from 'react';
import './Input.scss';

function Input({
    placeholder,
    type,
    onChange,
    value
}) {
    return (
        <>
        
        <input
            className="Input-control mb-tiny" 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
        
        </>
    )
}

export default Input

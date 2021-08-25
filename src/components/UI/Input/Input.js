import React, { memo } from 'react';
import './Input.scss';

function Input({
    placeholder,
    type,
    onChange,
    value,
    className,
    message,
    name,
    isError
}) {
    if(type === "textarea") {
        return (
        <>
            <textarea
                name={name}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {isError && (
                <div className="message">
                    <span className="message__error">{message}</span>
                </div>
            )}
        </>
        )
    }
    else return (
    <>
        <input
            name={name}
            className={className} 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
        {isError && (
            <div className="message">
                <span className="message__error">{message}</span>
            </div>
        )}
    </>
    )
}

export default memo(Input) 

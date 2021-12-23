import React, { memo } from 'react';
import './Input.scss';

function Input({
    placeholder,
    type,
    onChange,
    onBlur,
    value,
    className,
    message,
    name,
    min,
<<<<<<< HEAD
=======
    disabled,
>>>>>>> 9bf1327cb5d3f45e02c7429f185acf2faf70528b
    isError
}) {
    if(type === "textarea") {
        return (
        <>
            <textarea
                name={name}
                id={name}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
            />
            {isError && (
                <div className="message">
                    <span className="message__error">{message}</span>
                </div>
            )}
        </>
        )
    }
    else if(type === 'date') {
        return (
            <>
                <input
                    name={name}
                    className={className} 
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    min={min}
<<<<<<< HEAD
=======
                    max={"9999-12-31"}
                    disabled={disabled}
>>>>>>> 9bf1327cb5d3f45e02c7429f185acf2faf70528b
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
                onBlur={onBlur}
                value={value}
<<<<<<< HEAD
=======
                disabled={disabled}
>>>>>>> 9bf1327cb5d3f45e02c7429f185acf2faf70528b
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

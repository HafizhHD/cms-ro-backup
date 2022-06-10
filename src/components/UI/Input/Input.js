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
    max,
    disabled,
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
    else if(type === 'date' || type === 'datetime-local') {
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
                    max={"9999-12-31"}
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
    else if(type === 'number') {
        return (
            <>
                <input
                    name={name}
                    className={className} 
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    min={min}
                    max={max}
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

export default memo(Input) 

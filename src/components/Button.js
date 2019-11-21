import React from 'react';
import "./Button.css";

const ButtonInline = ({
                          onClick,
                          type = 'button',
                          children,
                            className
                      }) =>
    <Button
        type={type}
        className={className}
        onClick={onClick}
    >
        {children}
    </Button>;

const Button = ({
                    onClick,
                    className,
                    type = 'button',
                    children
                }) =>
    <button
        type={type}
        className={className}
        onClick={onClick}
    >
        {children}
    </button>;

export default Button;

export {
    ButtonInline
};
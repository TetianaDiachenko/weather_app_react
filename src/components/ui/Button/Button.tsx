import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    className?: string;
 };

 const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    size = 'medium',
    type = 'button',
    className,
 }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames(
                styles.button,
                styles[size],
                className
            )}
        >
            {children}
        </button>
    );
 };

 export default Button;
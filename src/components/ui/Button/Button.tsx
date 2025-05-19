import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    className?: string;
 };

 const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    size = 'medium',
    color = 'primary',
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
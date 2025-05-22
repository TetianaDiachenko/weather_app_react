import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;

 };

 const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    size = 'medium',
    type = 'button',
    className,
    disabled = false,
 }) => {
      return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
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
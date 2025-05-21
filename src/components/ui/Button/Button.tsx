import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    to?: string;
 };

 const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    size = 'medium',
    type = 'button',
    className,
    to,
 }) => {
    const classes = classNames(
        styles.button,
        styles[size],
        className
      );
      if (to) {
        if (to.startsWith('http') || to.startsWith('#')) {
          return (
            <a href={to} className={classes}>
              {children}
            </a>
          );
        }

        return (
          <Link to={to} className={classes}>
            {children}
          </Link>
        );
      }

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
import { Link } from 'react-router-dom';
import styles from '../Button/Button.module.scss';
import classNames from 'classnames';

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void; 
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  children,
  size = 'medium',
  className,
}) => {
  return (
    <Link to={to} className={classNames(styles.button, styles[size], className)}>
      {children}
    </Link>
  );
};
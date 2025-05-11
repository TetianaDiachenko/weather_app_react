import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from './ThemeSwitcher.module.scss';
import SunIcon from '../../svg-components/Sun.tsx';
import MoonIcon from '../../svg-components/Moon.tsx';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button 
        className={styles.themeSwitcher}
        onClick={toggleTheme} 
        >
            {theme === 'dark' 
            ? <SunIcon className={styles.icon} /> 
            : <MoonIcon className={styles.icon} />}    
        </button>
    );
};

export default ThemeSwitcher;

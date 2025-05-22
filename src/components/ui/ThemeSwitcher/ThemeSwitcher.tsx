import styles from './ThemeSwitcher.module.scss';
import SunIcon from '../../svg-components/Sun.tsx';
import MoonIcon from '../../svg-components/Moon.tsx';
import { useTheme } from "../../hooks/useTheme.ts";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

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

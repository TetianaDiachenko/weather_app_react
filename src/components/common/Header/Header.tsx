import styles from './Header.module.scss';
import Search from '../../search/Search/Search';
import Button from '../../ui/Button/Button';
import ThemeSwitcher from '../../ui/ThemeSwitcher/ThemeSwitcher';

const handleSignIn = () => {
    console.log('Sign In clicked'); // тимчасова заглушка
  };

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Search />
            </div>
            <div className={styles.right}>
                <ThemeSwitcher /> 
                <Button size="medium" onClick={handleSignIn}>
                    Sign In
                </Button>
            </div>
        </header>
    )
}

export default Header;


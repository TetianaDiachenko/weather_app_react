import styles from './Header.module.scss';
import Search from '../../search/Search/Search';
import ThemeSwitcher from '../../ui/ThemeSwitcher/ThemeSwitcher';
import { ButtonLink } from '../../ui/ButtonLink/ButtonLink';

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
                <ButtonLink size="medium" onClick={handleSignIn} to="#">
                    Sign In
                </ButtonLink>
            </div>
        </header>
    )
}

export default Header;


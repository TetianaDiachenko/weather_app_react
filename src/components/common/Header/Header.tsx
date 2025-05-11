import styles from './Header.module.scss';
import Search from '../../search/Search/Search';
// import SignInButton from '../../ui/SignInButton/SignInButton';
import ThemeSwitcher from '../../ui/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Search />
            </div>
            <div className={styles.right}>
                <ThemeSwitcher /> 
                {/* <SignInButton />  */}
            </div>
        </header>
    )
}

export default Header;


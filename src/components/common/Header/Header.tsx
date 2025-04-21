// import React from 'react';
import styles from './Header.module.scss';
// import Search from '../../search/Search';
// import SignInButton from '../../ui/SignInButton/SignInButton';
// import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {/* <Search /> */}
                </div>
                <div className={styles.right}>
                    {/* <ThemesSwitcher /> 
                    <SignInButton /> */}
                </div>                
            </div>
        </header>
    )
}   

export default Header;


import React from 'react';
import Header from '../common/Header/Header';
import styles from './Layout.module.scss'

type LayoutProps = {
    children: React.ReactNode; // ReactNode - because I can use everything(another components, text, arrays...) 
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.wrapper}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
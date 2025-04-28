import Header from '../common/Header/Header';
import styles from './Layout.module.scss'
import { Outlet } from 'react-router-dom';

// type LayoutProps = {
//     children: React.ReactNode; // ReactNode - because I can use everything(another components, text, arrays...) 
// };

const Layout = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.wrapper}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
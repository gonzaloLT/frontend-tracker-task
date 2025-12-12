import { PublicHeader } from '../components/navigation/PublicHeader';
import styles from './styles/publicLayout.module.css';

export const PublicLayout = ({ children }) => {
    return (
        <div className={styles.layoutContainer}>
            <PublicHeader />
            <main className={styles.content}>{children}</main>
        </div>
    );
};
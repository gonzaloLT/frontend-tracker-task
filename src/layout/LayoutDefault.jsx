import { Header } from '../components/navigation/Header'
import styles from "./styles/layout.module.css";

export const LayoutDefault = ({ children }) => {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <main className={styles.content}>{children}</main>
        </div>
    );
};
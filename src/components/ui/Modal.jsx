import styles from './styles/modal.module.css';

export const Modal = ({ children, isOpen, closeModal, title }) => {
    if (!isOpen) return null; 

    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header className={styles.modalHeader}>
                    <h3>{title}</h3>
                    <button className={styles.modalClose} onClick={closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </header>

                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}
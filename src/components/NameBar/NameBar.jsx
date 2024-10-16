import React from "react";
import styles from './NameBar.module.css';

export const NameBar = ({ selectedContact, setSelectedContact }) => {
    const noSelection = () => {
        setSelectedContact(null);  // This will trigger the transition in the parent component (MainLayout)
    };

    return (
        <nav className={`navbar ${styles.con}`}>
            <div className={`container-fluid`}>
                <span className={`navbar-brand d-flex ${styles.brand}`}>
                    <a onClick={noSelection}>
                        <i className={`fa-solid fa-arrow-left mx-2 ${styles.arrow}`}></i>
                    </a>
                    <div className={styles.circularImage}>
                        <img src={selectedContact.img} alt={selectedContact.name} className="flex-fill" />
                    </div>
                    {selectedContact.name}
                </span>
            </div>
        </nav>
    );
};

export default NameBar;

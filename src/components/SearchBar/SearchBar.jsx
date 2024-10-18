import React, { useState } from "react";
import styles from './SearchBar.module.css';

export const SearchBar = ({ setFilterType, setShowUnread, showUnread }) => {
    const [isGroupActive, setIsGroupActive] = useState(false);
    const [isUnreadActive, setIsUnreadActive] = useState(showUnread); // Initialize based on prop

    const toggleGroupFilter = () => {
        setIsGroupActive(prev => !prev);
        setFilterType(prev => (prev === 'group' ? 'all' : 'group'));
    };

    const toggleUnreadFilter = () => {
        setIsUnreadActive(prev => !prev);
        setShowUnread(prev => !prev);
    };

    return (
        <div className={`${styles.back} flex-fill`}>
            <div className={`${styles.con}`}>
                <div className={`${styles.searchbar} my-0`}>
                    <input type="text" placeholder="Search" className={`${styles.searchinput}`} />
                    <button className={`${styles.button} me-2`}>
                        <i className={`fa fa-search `}></i>
                    </button>
                </div>
                <div className="d-flex my-2 ">
                    <button
                        className={`${styles.button} ms-2 mx-3 px-3 py-0 ${isGroupActive ? styles.active : ''}`}
                        onClick={toggleGroupFilter}
                    >
                        Groups
                    </button>
                    <button
                        className={`${styles.button} me-2 mx-2 px-3 py-0 ${isUnreadActive ? styles.active : ''}`}
                        onClick={toggleUnreadFilter}
                    >
                        Unread
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;

import React, { useState } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal'; // Import the ProfileModal
import styles from './Nav.module.css';

export const Navbar = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileModalOpen(true); // Open the modal when profile icon is clicked
  };

  const handleCloseModal = () => {
    setIsProfileModalOpen(false); // Close the modal when clicking close button
  };

  return (
    <>
      <div className={`${styles.con}`}>
        <ul className={`nav flex-column ${styles.side}`}>
          <li className="nav-item">
            <a className="nav-link" onClick={handleProfileClick}>
              <i className={`${styles.icon} fa-solid fa-circle-user`}></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className={`${styles.icon} fa-solid fa-circle-plus`}></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className={`${styles.icon} fa-solid fa-right-from-bracket`}></i>
            </a>
          </li>
        </ul>
      </div>

      <ProfileModal isOpen={isProfileModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navbar;

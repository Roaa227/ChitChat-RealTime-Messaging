import React, { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal"; // Import the ProfileModal
import styles from "./Nav.module.css";
import useLogout from "../../hooks/useLogout";

export const Navbar = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const {loading, logout} = useLogout();
  const { logout } = useLogout();
  const handleProfileClick = () => {
    setIsProfileModalOpen(true); // Open the modal when profile icon is clicked
  };

  const handleCloseModal = () => {
    setIsProfileModalOpen(false); // Close the modal when clicking close button
  };
  const handleLogOut = async () => {
    await logout();
  };


  return (
    <>
      <div className={`${styles.con}`}>
        <ul className={`nav flex-column ${styles.side}`}>
          <li className="nav-item">
            <Link className="nav-link" onClick={handleProfileClick}>
              <i className={`${styles.icon} fa-solid fa-circle-user`}></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              <i className={`${styles.icon} fa-solid fa-circle-plus`}></i>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleLogOut}>
              <i
                className={`${styles.icon} fa-solid fa-right-from-bracket`}
              ></i>
            </a>
          </li>
        </ul>
      </div>

      <ProfileModal isOpen={isProfileModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navbar;

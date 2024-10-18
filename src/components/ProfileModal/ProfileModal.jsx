import React, { useState } from "react";

const ProfileModal = ({ isOpen, onClose }) => {
    const [user, setUser] = useState({ name: "Ra2re2o", Email: "Email: 123@example.com", Bio: "HELLO." });
    const [newUser, setNewUser] = useState({ name: "", Email: "", Bio: "" });
    const [showChangeModal, setShowChangeModal] = useState(false); // State for change modal visibility

    const handleChangeModalToggle = () => {
        setShowChangeModal(!showChangeModal); // Toggle change modal
    };

    const handleChangeModalClose = () => {
        setShowChangeModal(false); // Close change modal
    };

    const handleChangeProfile = (e) => {
        e.preventDefault();
        setUser((prevState) => ({
            name: newUser.name || prevState.name,
            Email: newUser.Email || prevState.Email,
            Bio: newUser.Bio || prevState.Bio,
        }));
        setNewUser({ name: "", Email: "", Bio: "" });
        handleChangeModalClose(); // Close change modal after saving
    };

    return (
        <>
            <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Profile</h1>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column align-items-center text-center">
                            <img src="/avatar.png" alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
                            <h3>{user.name}</h3>
                            <h5>{user.Email}</h5>
                            <h5>Bio: {user.Bio}</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" onClick={onClose} style={{backgroundColor:'#DFDCF2', color:'#9049BF'}}>
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn"
                                onClick={handleChangeModalToggle} 
                                style={{backgroundColor:'#9049BF', color:'#DFDCF2'}}
                            >
                                Change
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showChangeModal && (
                <div className={`modal fade show`} style={{ display: 'block' }} aria-labelledby="changeModalLabel">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="changeModalLabel">Change Profile Information</h1>
                                <button type="button" className="btn-close" onClick={handleChangeModalClose} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleChangeProfile}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={newUser.name}
                                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                            placeholder="Enter new name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="Email"
                                            value={newUser.Email}
                                            onChange={(e) => setNewUser({ ...newUser, Email: e.target.value })}
                                            placeholder="Enter new email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="bio" className="form-label">Bio</label>
                                        <textarea
                                            className="form-control"
                                            id="bio"
                                            name="Bio"
                                            value={newUser.Bio}
                                            onChange={(e) => setNewUser({ ...newUser, Bio: e.target.value })}
                                            placeholder="Enter new bio"
                                        />
                                    </div>
                                    <button type="submit" className="btn" onClick={handleChangeProfile} style={{backgroundColor:'#9049BF', color:'#DFDCF2'}}>
                                        Save changes
                                    </button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn" onClick={handleChangeModalClose} style={{backgroundColor:'#DFDCF2', color:'#9049BF'}}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileModal;

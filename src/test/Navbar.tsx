import React, { useState } from 'react';
import './styles.css';


function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [contactNumber, setContactNumber] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    console.log('Contact number submitted:', contactNumber);
    closeModal();
  };

  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><button onClick={openModal}>User</button></li>
      </ul>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Contact Number</h2>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter contact number"
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import DocumentUploadForm from "../DocumentUploadForm";
import "./index.css";

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="header">
            <h1 className="header-title">Welcome, User</h1>
            <button className="add-document-btn" onClick={openPopup}>
                + New Document
            </button>

            {showPopup && <DocumentUploadForm onClose={closePopup} />}
        </div>
    );
};

export default Header;

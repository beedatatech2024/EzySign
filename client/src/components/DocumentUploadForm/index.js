import { useState } from "react";

const DocumentUploadForm = ({ onClose }) => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = () => {
        console.log("File:", file);
        console.log("Message:", message);
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h3>Upload Document</h3>

                {/* Drag and Drop Area */}
                <div
                    className="file-drop-area"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.docx,.jpg,.png"
                        className="file-input"
                        id="file-input"
                    />
                    <p>{file ? file.name : <label htmlFor="file-input">Drag & Drop or Click to <span className="upload-label">Upload</span></label>}</p>
                </div>

                {/* Message Input */}
                <textarea
                    placeholder="Add a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="message-input"
                ></textarea>

                {/* Buttons */}
                <div className="popup-buttons">
                    <button onClick={onClose} className="cancel-btn">Cancel</button>
                    <button onClick={handleSubmit} className="submit-btn">Upload</button>
                </div>
            </div>
        </div>
    );
};

export default DocumentUploadForm;

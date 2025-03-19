import { useState } from "react";
import { uploadDocument } from "../../api/documentApi";

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

    const handleSubmit = async () => {
        if (!file) {
            alert("Please select a file");
            return;
          }
      
          const formData = new FormData();
          formData.append("document", file);
          formData.append("message", message);
      
          try {
            const res = await uploadDocument(formData);
            console.log("Upload Response:", res);
            alert("Document uploaded successfully");
            onClose();
          } catch (err) {
            console.error("Upload Error:", err);
            alert("Failed to upload document");
          }
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

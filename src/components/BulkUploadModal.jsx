import { useState } from "react";
import "../styles/bulkUploadModal.css";

const BulkUploadModal = ({ isOpen, onClose, onUpload }) => {
  if (!isOpen) return null;

  const [excelFile, setExcelFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleUpload = () => {
    if (!excelFile) {
      alert("Please select an Excel file");
      return;
    }

    // UI-first → backend later
    onUpload({ excelFile, imageFile });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="bulk-modal">
        <div className="modal-header">
          <h3>Add Catalog in Bulk</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <p className="subtitle">
          Select an Excel file (.xls, .xlsx) to upload
        </p>

        {/* Excel Upload */}
        <div className="upload-box">
          <input
            type="file"
            accept=".xls,.xlsx"
            onChange={(e) => setExcelFile(e.target.files[0])}
          />
          <button className="choose-btn">Choose File</button>
          <span>{excelFile ? excelFile.name : "No file chosen"}</span>
        </div>

        {/* Image Upload */}
        <div className="upload-box">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
          <button className="image-btn">Upload Image</button>
          <span>{imageFile ? imageFile.name : "No file chosen"}</span>
        </div>

        {/* Actions */}
        <div className="modal-footer">
          <button className="remove-btn" onClick={() => {
            setExcelFile(null);
            setImageFile(null);
          }}>
            Remove
          </button>

          <button className="upload-btn" onClick={handleUpload}>
            Upload
          </button>
        </div>

        <div className="template-link">
          <a href="#" download>
            Download Template ⬇
          </a>
        </div>
      </div>
    </div>
  );
};

export default BulkUploadModal;

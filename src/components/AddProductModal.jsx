import { useState } from "react";
import "../styles/addProductModal.css";

const AddProductModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    productName: "",
    price: "",
    category: "",
    subCategory: "",
    hsn: "",
    gst: "",
    stock: "",
    tags: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.productName || !form.price || !form.category || !form.stock) {
      alert("Please fill all required fields");
      return;
    }

    // UI-first → backend later
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Add New Product</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="row">
            <div className="field">
              <label>Product Name</label>
              <input
                name="productName"
                placeholder="Enter product name"
                value={form.productName}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={form.price}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Category</label>
              <select name="category" value={form.category} onChange={handleChange}>
                <option value="">Select a category</option>
                <option>Writing Instruments</option>
                <option>Paper Products</option>
                <option>Office Supplies</option>
                <option>School Supplies</option>
              </select>
            </div>

            <div className="field">
              <label>Sub Category</label>
              <select
                name="subCategory"
                value={form.subCategory}
                onChange={handleChange}
              >
                <option value="">Select a subcategory</option>
                <option>Pens</option>
                <option>Pencils</option>
                <option>Notebooks</option>
                <option>Files</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>HSN No.</label>
              <input
                name="hsn"
                placeholder="Enter HSN No."
                value={form.hsn}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>GST (%)</label>
              <select name="gst" value={form.gst} onChange={handleChange}>
                <option value="">GST %</option>
                <option>0</option>
                <option>5</option>
                <option>12</option>
                <option>18</option>
              </select>
            </div>
          </div>


          <div className="row">
            <div className="field full">
              <label>Product Tags</label>
              <select name="tags" value={form.tags} onChange={handleChange}>
                <option value="">Select a tag</option>
                <option>School Use</option>
                <option>Office Use</option>
                <option>Bestseller</option>
                <option>New Arrival</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="field full">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Enter description"
                value={form.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="upload-box">
            Upload Images
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn" onClick={handleSubmit}>Save Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;

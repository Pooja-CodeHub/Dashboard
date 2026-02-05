import { useEffect, useState } from "react";
import "../styles/products.css";
import AddProductModal from "../components/AddProductModal";
import BulkUploadModal from "../components/BulkUploadModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);

  useEffect(() => {
    // Mock backend data (replace with API later)
    setProducts([
      {
        id: "ST-NT-01",
        name: "Classmate Notebook",
        description: "Ruled notebook suitable for school and office use",
        price: 60,
        category: "Paper Products",
      },
      {
        id: "ST-PN-02",
        name: "Cello Gel Pen",
        description: "Smooth gel pen for everyday writing",
        price: 10,
        category: "Writing Instruments",
      },
      {
        id: "ST-PC-03",
        name: "Apsara Pencil",
        description: "High-quality pencil for students",
        price: 5,
        category: "Writing Instruments",
      },
    ]);
  }, []);

  // ✅ Add product from modal (UI only)
  const handleAddProduct = (product) => {
    const newProduct = {
      id: `ST-${products.length + 1}`,
      name: product.productName,
      description: product.description,
      price: product.price,
      category: product.category,
    };

    setProducts((prev) => [...prev, newProduct]);
  };

  // ✅ Bulk upload handler (UI only)
  const handleBulkUpload = (data) => {
    console.log("Bulk upload data:", data);
    // later → POST /api/products/bulk
  };

  // ✅ Delete product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter(
    (p) =>
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.price.toString().includes(search)
  );

  return (
    <div className="products-container">
      <h2>Stationery Products</h2>

      {/* Search & Actions */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search products by ID, name, or price"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="action-buttons">
          <button className="bulk-btn" onClick={() => setShowBulkModal(true)}>
            Add Product in Bulk
          </button>
          <button className="add-btn" onClick={() => setShowModal(true)}>
            Add Single Product
          </button>
        </div>
      </div>

      {/* Products Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Product Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price ₹</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>₹{p.price}</td>
                <td>{p.category}</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(p.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Add Single Product Modal */}
      <AddProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddProduct}
      />

      {/* Bulk Upload Modal */}
      <BulkUploadModal
        isOpen={showBulkModal}
        onClose={() => setShowBulkModal(false)}
        onUpload={handleBulkUpload}
      />
    </div>
  );
};

export default Products;

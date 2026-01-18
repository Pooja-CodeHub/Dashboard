import { useState } from "react";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wheat Seeds",
      category: "Seeds",
      price: 1200,
      quantity: 50,
      status: "Active",
    },
    {
      id: 2,
      name: "Rice Fertilizer",
      category: "Fertilizer",
      price: 800,
      quantity: 20,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Organic Pesticide",
      category: "Pesticide",
      price: 600,
      quantity: 35,
      status: "Active",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add product
  const addProduct = () => {
    if (!form.name || !form.category || !form.price || !form.quantity) {
      alert("All fields are required");
      return;
    }

    const newProduct = {
      id: products.length + 1,
      ...form,
      status: "Active",
    };

    setProducts([...products, newProduct]);
    setForm({ name: "", category: "", price: "", quantity: "" });
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Toggle status
  const toggleStatus = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Active" ? "Inactive" : "Active" }
          : p
      )
    );
  };

  // Search filter
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="products-container">
      <h2>Products Inventory Management</h2>

      {/* Top Bar */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Add Product Form */}
      <div className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />

        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* Products Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price ₹</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <span className={p.status === "Active" ? "active" : "inactive"}>
                  {p.status}
                </span>
              </td>
              <td>
                <button
                  className="status-btn"
                  onClick={() => toggleStatus(p.id)}
                >
                  Toggle
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;

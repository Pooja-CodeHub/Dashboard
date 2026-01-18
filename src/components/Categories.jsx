import { useState } from "react";
import "../styles/categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Seeds" },
    { id: 2, name: "Fertilizer" },
    { id: 3, name: "Pesticide" },
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Wheat Seeds", category: "Seeds" },
    { id: 2, name: "Rice Fertilizer", category: "Fertilizer" },
    { id: 3, name: "Organic Pesticide", category: "Pesticide" },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  // Add category
  const addCategory = () => {
    if (!newCategory) {
      alert("Category name required");
      return;
    }

    setCategories([
      ...categories,
      { id: categories.length + 1, name: newCategory },
    ]);
    setNewCategory("");
  };

  // Update category
  const updateCategory = (id) => {
    setCategories(
      categories.map((c) =>
        c.id === id ? { ...c, name: editingName } : c
      )
    );
    setEditingId(null);
  };

  // Assign product to category
  const assignCategory = (productId, categoryName) => {
    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, category: categoryName } : p
      )
    );
  };

  return (
    <div className="categories-container">
      <h2>Category Management</h2>

      {/* Add Category */}
      <div className="category-form">
        <input
          type="text"
          placeholder="New Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={addCategory}>Add Category</button>
      </div>

      {/* Categories Table */}
      <div className="section">
        <h3>Categories List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>
                  {editingId === c.id ? (
                    <input
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                    />
                  ) : (
                    c.name
                  )}
                </td>
                <td>
                  {editingId === c.id ? (
                    <button onClick={() => updateCategory(c.id)}>Save</button>
                  ) : (
                    <button
                      onClick={() => {
                        setEditingId(c.id);
                        setEditingName(c.name);
                      }}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assign Products */}
      <div className="section">
        <h3>Assign Product to Category</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Current Category</th>
              <th>Assign New Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>
                  <select
                    value={p.category}
                    onChange={(e) =>
                      assignCategory(p.id, e.target.value)
                    }
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Leaf, Tag, Percent, Image as ImageIcon, Package, CheckCircle } from 'lucide-react';
import "./AddProduct.css";

const AddProduct = ({ onSuccess, editData }) => {
  const initialState = {
    name: '', price: '', category: 'Vegetables', image: '', stock: true, discount: 0
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData(initialState);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // 'stock' को boolean में कन्वर्ट करना क्योंकि API अक्सर true/false मांगती है
    const finalValue = name === 'stock' ? value === 'true' : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = editData?._id 
        ? `http://localhost:5000/api/products/${editData._id}`
        : 'http://localhost:5000/api/products/add';
      
      const method = editData?._id ? 'put' : 'post';
      
      await axios[method](url, formData);
      alert(editData ? "Updated Successfully! ✨" : "Added Successfully! ✅");
      
      if (!editData) setFormData(initialState);
      onSuccess();
    } catch (err) {
      alert("Error: Could not save product. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modern-form-container">
      <div className="form-header-main">
        <div className="leaf-circle">
          <Leaf size={22} color="#fff" />
        </div>
        <div>
          <h3>{editData ? "Edit Product" : "Add New Product"}</h3>
          <p className="form-subtitle">Enter organic product details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="popup-form">
        <div className="input-group">
          <label><Package size={16}/> Product Name</label>
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="input-group">
            <label><Tag size={16}/> Price (₹)</label>
            <input name="price" type="number" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label><Percent size={16}/> Discount (%)</label>
            <input name="discount" type="number" value={formData.discount} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              {["Vegetables", "Fruits", "Spices", "Tubers"].map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* यहाँ साधारण Stock Dropdown है */}
          <div className="input-group">
            <label><CheckCircle size={16}/> Stock Status</label>
            <select name="stock" value={formData.stock.toString()} onChange={handleChange}>
              <option value="true">Available (In Stock)</option>
              <option value="false">Sold Out (Out of Stock)</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label><ImageIcon size={16}/> Image URL</label>
          <input name="image" type="text" placeholder="Paste link here..." value={formData.image} onChange={handleChange} required />
        </div>

        <button type="submit" className="publish-btn" disabled={loading}>
          {loading ? "Saving..." : (editData ? "Update Product" : "Add Product")}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
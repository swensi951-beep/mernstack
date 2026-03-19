import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/ProductList.css';
import { ShoppingCart, Plus, X, Trash2, Edit3, Loader2, Star, Filter } from 'lucide-react';
import AddProduct from './AddProduct'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products/all');
      setProducts(res.data);
      setLoading(false);
    } catch (err) { 
      console.error(err);
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        setProducts(products.filter(p => p._id !== id));
        alert("Product removed! 🗑️");
      } catch (err) { alert("Delete failed."); }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  if (loading) return <div className="loader-box"><Loader2 className="animate-spin" size={40} color="#56B26A" /></div>;

  return (
    <section className="shop-product-area">
      <div className="container">
        <div className="list-header">
          {/* <h2 className="section-title"></h2> */}
          <button className="add-main-btn" onClick={handleAddNew}>
            <Plus size={18} /> Add New Product
          </button>
        </div>

        {/* --- Modern Filter Bar --- */}
        <div className="filter-wrapper">
          <div className="filter-bar">
            <span className="filter-label"><Filter size={16}/> Filter by Category:</span>
           {['All', 'Vegetables', 'Fruits', 'Spices', 'Tubers'].map((cat) => (
  <button 
    key={cat} 
    className={`filter-btn ${activeCategory === cat ? 'active' : ''} btn-${cat.toLowerCase()}`} // यहाँ 'btn-category' जोड़ा गया है
    onClick={() => setActiveCategory(cat)}
  >
    {cat}
  </button>
))}
            
          </div>
        </div>

        {/* --- Product Grid --- */}
      {/* --- Product Grid --- */}
<div className="product-grid-layout">
  {products.filter(p => activeCategory === 'All' || p.category === activeCategory).map((item) => (
    /* यहाँ ध्यान दें: className में डायनामिक कैटेगरी क्लास जोड़ी गई है */
    <div key={item._id} className={`single-product-item item-${item.category.toLowerCase()}`}>
       <div className="product-thumb">
          {item.discount > 0 && <div className="sale-badge">-{item.discount}%</div>}
          
          <img 
            src={item.image} 
            alt={item.name} 
            className={!item.stock ? 'sold-out-blur' : ''} 
          />
          
          {/* यहाँ SOLD का स्टिकर वापस लगा दिया है जो आपके पिछले कोड में अधूरा था */}
          {!item.stock }

          <div className="admin-actions">
            <button className="action-btn edit" onClick={() => handleEdit(item)}><Edit3 size={14}/></button>
            <button className="action-btn delete" onClick={() => handleDelete(item._id, item.name)}><Trash2 size={14}/></button>
          </div>
       </div>

       {/* प्रोडक्ट कंटेंट पर भी ब्लर क्लास ताकि टेक्स्ट भी धुंधला दिखे */}
       <div className={`product-content ${!item.stock ? 'sold-out-blur' : ''}`}>
          <span className="cat-label">{item.category}</span>
          <h2>{item.name}</h2>
          <div className="product-footer">
            <div className="price-box">
               <span className="price-tag"><font color="green">₹{item.price}.00</font></span><br></br>
               {item.discount > 0 && <span className="old-price">₹{Math.round(item.price / (1 - item.discount/100))}</span>}
            </div>
            <button 
              className={`cart-btn ${!item.stock ? 'sold' : ''}`} 
              disabled={!item.stock}
            >
              {item.stock ? <ShoppingCart size={20} /> : <span className="sold-text">SOLD</span>}
            </button>
          </div>
       </div>
    </div>
  ))}
</div>

        {/* --- ⭐ MODAL POPUP ⭐ --- */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content-wrapper">
              <button className="close-modal-btn" onClick={() => setShowModal(false)}><X size={24} /></button>
              <AddProduct 
                key={editingProduct ? editingProduct._id : 'new'}
                onSuccess={() => { setShowModal(false); fetchData(); }} 
                editData={editingProduct} 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
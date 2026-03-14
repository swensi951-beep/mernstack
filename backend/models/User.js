const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['customer', 'delivery_boy', 'admin'], 
    default: 'customer' 
  },
  phone: { type: String },
  status: { type: String, default: 'OFFLINE' } // Online/Offline status mate
});

module.exports = mongoose.model('User', UserSchema);
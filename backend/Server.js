const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');

// Routes Import
const cartRoutes = require('./routes/cartRoutes');

dotenv.config();
const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Socket.io Setup
const io = new Server(server, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] }
});

// Database Connection (Small letters for DB name to avoid case error)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/farmmarket';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB (farmmarket)'))
  .catch((err) => console.log('❌ DB Connection Error:', err));

// API Routes
app.use('/api/cart', cartRoutes);

app.get("/", (req, res) => {
  res.send("🚀 FarmMarket Backend is Running!");
});

// Socket.io Connection
io.on('connection', (socket) => {
    console.log('User Connected:', socket.id);
    socket.on('disconnect', () => console.log('User Disconnected'));
});

// Server Start
const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
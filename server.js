const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
// Import routes
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/auth', authRoutes);
// Health check route
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Server is running',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB Atlas...');
        
        // Remove deprecated options, they're not needed in newer versions
        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('✅ MongoDB Atlas connected successfully');
        console.log('Database:', mongoose.connection.db.databaseName);
        
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
    }
};

// Start server
const startServer = async () => {
    await connectDB();
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
        console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
    });
};

startServer();

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect('mongodb://localhost/chat_app', { useNewUrlParser: true, useUnifiedTopology: true });

// Socket.io logic
io.on('connection', (socket) => {
    console.log('New client connected');
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    // Add socket logic for handling real-time messages
});

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

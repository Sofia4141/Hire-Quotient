const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/messages', chatController.getMessages);
router.post('/send-message', chatController.sendMessage);

module.exports = router;

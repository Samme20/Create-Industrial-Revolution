const express = require('express');
const router = express.Router();

// Import route modules
const exampleRoutes = require('./example.routes');

// Use route modules
router.use('/examples', exampleRoutes);

// Base API route
router.get('/', (req, res) => {
  res.json({
    message: 'Välkommen till Industrial Revolution API'
  });
});

module.exports = router;
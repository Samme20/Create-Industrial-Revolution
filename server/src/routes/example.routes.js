const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/example.controller');

// GET all examples
router.get('/', exampleController.getAllExamples);

// GET single example by ID
router.get('/:id', exampleController.getExampleById);

// POST new example
router.post('/', exampleController.createExample);

// PUT update example
router.put('/:id', exampleController.updateExample);

// DELETE example
router.delete('/:id', exampleController.deleteExample);

module.exports = router;
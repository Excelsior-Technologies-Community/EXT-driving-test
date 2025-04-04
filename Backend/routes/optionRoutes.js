const express = require("express");
const optionController = require("../controllers/optionController"); // Adjust the path as necessary

const router = express.Router();

// Public routes
router.get('/', optionController.getAllQuestionOptions);
router.get('/:id', optionController.getQuestionOptionById);

// Protected routes (add auth middleware as needed)
router.post('/', optionController.createQuestionOption);
router.put('/:id', optionController.updateQuestionOptionById);
router.delete('/:id', optionController.deleteQuestionOptionById);

module.exports = router;

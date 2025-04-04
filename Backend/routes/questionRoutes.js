const express = require("express");
const questionController = require("../controllers/questionController"); // Adjust the path as necessary
const upload = require("../config/multerConfig"); // Adjust the path as necessary
const router = express.Router();

// Public routes
router.get('/', questionController.getAllQuestions);
router.get('/:id', questionController.getQuestionById);

// Protected routes (add auth middleware as needed)
router.post('/',upload.single('questionImage'), questionController.createQuestion);
router.put('/:id', questionController.updateQuestionById);
router.delete('/:id', questionController.deleteQuestionById);

module.exports = router;

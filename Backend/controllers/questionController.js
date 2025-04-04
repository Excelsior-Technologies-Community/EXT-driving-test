const Question = require("../models/Question");
const APIError = require('../utils/APIError');

// Create a Question
exports.createQuestion = async (req, res, next) => {
    try {
        const {
            testId,
            questionText,
            description,
            createdBy,
            updatedBy,
        } = req.body;

        // Construct the image URL from the uploaded file
        const questionImg = req.file ? "/questions/images/" + req.file.filename : null;

        // Create the question record
        const newQuestion = await Question.create({
            testId,
            questionText,
            questionImg,
            description,
            createdBy,
            updatedBy, // Initial updater is the creator
        });

        res.status(201).json(newQuestion);
    } catch (error) {
        next(error);
    }
};

// Get all Questions
exports.getAllQuestions = async (req, res, next) => {
    try {
        const questions = await Question.findAll();
        res.json(questions);
    } catch (error) {
        next(error);
    }
};

// Get Question by ID
exports.getQuestionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const question = await Question.findByPk(id);

        if (!question) {
            throw new APIError('Question not found', 404);
        }

        res.json(question);
    } catch (error) {
        next(error);
    }
};

// Update Question by ID
exports.updateQuestionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const question = await Question.findByPk(id);

        if (!question) {
            throw new APIError('Question not found', 404);
        }

        await question.update(req.body);
        res.json(question);
    } catch (error) {
        next(error);
    }
};

// Delete Question by ID
exports.deleteQuestionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const question = await Question.findByPk(id);

        if (!question) {
            throw new APIError('Question not found', 404);
        }

        await question.destroy();
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

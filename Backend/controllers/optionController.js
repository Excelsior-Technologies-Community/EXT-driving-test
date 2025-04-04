const Question = require("../models/Question");
const QuestionOption = require("../models/QuestionOption");
const APIError = require('../utils/APIError');

// Create a Question Option
exports.createQuestionOption = async (req, res, next) => {
    try {
        const {
            questionId,
            optionText,
            description,
            isCorrect,
            createdBy,
            updatedBy,
        } = req.body;

        const question = await Question.findByPk(questionId);

        if (!question) {
            throw new APIError('Question not found', 404);
        }

        // Create the question option record
        const newQuestionOption = await QuestionOption.create({
            questionId,
            optionText,
            description,
            isCorrect,
            createdBy,
            updatedBy, // Initial updater is the creator
        });

        res.status(201).json(newQuestionOption);
    } catch (error) {
        next(error);
    }
};

// Get all Question Options
exports.getAllQuestionOptions = async (req, res, next) => {
    try {
        const questionOptions = await QuestionOption.findAll();
        res.json(questionOptions);
    } catch (error) {
        next(error);
    }
};

// Get Question Option by ID
exports.getQuestionOptionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const questionOption = await QuestionOption.findByPk(id);

        if (!questionOption) {
            throw new APIError('Question option not found', 404);
        }

        res.json(questionOption);
    } catch (error) {
        next(error);
    }
};

// Update Question Option by ID
exports.updateQuestionOptionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const questionOption = await QuestionOption.findByPk(id);

        if (!questionOption) {
            throw new APIError('Question option not found', 404);
        }

        await questionOption.update(req.body);
        res.json(questionOption);
    } catch (error) {
        next(error);
    }
};

// Delete Question Option by ID
exports.deleteQuestionOptionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const questionOption = await QuestionOption.findByPk(id);

        if (!questionOption) {
            throw new APIError('Question option not found', 404);
        }

        await questionOption.destroy();
        res.status(200).json({success:true,message:"Option Deleted Successfully."});
    } catch (error) {
        next(error);
    }
};

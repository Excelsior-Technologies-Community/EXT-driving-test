const Question = require('../models/Question');
const QuestionOption = require('../models/QuestionOption');
const Test = require('../models/Test');
const APIError = require('../utils/APIError');

// Create a Test
exports.createTest = async (req, res, next) => {
    try {
        const newTest = await Test.create(req.body);
        res.status(201).json(newTest);
    } catch (error) {
        next(error);
    }
};

// Get all Tests
exports.getAllTests = async (req, res, next) => {
    try {
        const tests = await Test.findAll();
        res.json(tests);
    } catch (error) {
        next(error);
    }
};

// Get Test by ID
exports.getTestById = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Fetch the test with the associated questions and question options
        const test = await Test.findByPk(id, {
            include: [
                {
                    model: Question,
                    as: 'Questions', // Ensure this matches the alias used in the association
                    include: [
                        {
                            model: QuestionOption,
                            as: 'QuestionOptions', // Ensure this matches the alias used in the association
                        },
                    ],
                },
            ],
        });

        // If the test is not found, throw a 404 error
        if (!test) {
            throw new APIError('Test not found', 404);
        }

        // Send the test data as JSON response
        res.json(test);
    } catch (error) {
        // Pass the error to the next middleware (error handler)
        next(error);
    }
};


// Update Test by ID
exports.updateTestById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const test = await Test.findByPk(id);

        if (!test) {
            throw new APIError('Test not found', 404);
        }

        await test.update(req.body);
        res.json(test);
    } catch (error) {
        next(error);
    }
};

// Delete Test by ID
exports.deleteTestById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const test = await Test.findByPk(id);

        if (!test) {
            throw new APIError('Test not found', 404);
        }

        await test.destroy();
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
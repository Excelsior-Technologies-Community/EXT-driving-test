const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Adjust path as necessary
const Question = require('./Question');

const QuestionOption = sequelize.define(
    'QuestionOption',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        questionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'questions',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        optionText: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isCorrect: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: 'question_options',
        timestamps: true,
    }
);

Question.hasMany(QuestionOption, { foreignKey: 'questionId' });
QuestionOption.belongsTo(Question, { foreignKey: 'questionId' });

module.exports = QuestionOption;

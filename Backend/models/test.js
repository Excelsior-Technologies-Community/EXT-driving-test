const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Adjust path as necessary
const Question = require('./Question');

const Test = sequelize.define(
    'Test',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        type: {
            type: DataTypes.ENUM('car', 'bike'),
            allowNull: false,
        },
        level: {
            type: DataTypes.ENUM('easy', 'medium', 'hard'),
            allowNull: false,
        },
        totalQuestions: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mistakesAllowed: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        tableName: 'tests',
        timestamps: true,
    }
);

module.exports = Test;

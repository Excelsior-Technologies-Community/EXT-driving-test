const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Adjust path as necessary
const Test = require('./Test');

const Question = sequelize.define(
    'Question',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        testId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tests',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        questionText: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        questionImg: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
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
        tableName: 'questions',
        timestamps: true,
    }
);

Test.hasMany(Question, { foreignKey: 'testId' });
Question.belongsTo(Test, { foreignKey: 'testId' });

module.exports = Question;

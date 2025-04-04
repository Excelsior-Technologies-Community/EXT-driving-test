const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); // Adjust path as necessary
const Test = require('./test');

const Question = sequelize.define(
    'Question',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true,
        },
        testId: {
            type: DataTypes.INTEGER,
            references: {
                model: Test,
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

Question.associate = function (models) {
    Question.belongsTo(models.Test, {
        foreignKey: 'testId',
        as: 'test',
    });

    Question.hasMany(models.QuestionOption, {
        foreignKey: 'questionId',
        as: 'options',
        onDelete: 'CASCADE',
    });
};

module.exports = Question;

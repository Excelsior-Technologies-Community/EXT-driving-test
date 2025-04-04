// models/QuestionSet.js
module.exports = (sequelize, DataTypes) => {
    const QuestionSet = sequelize.define('QuestionSet', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      timestamps: false,
      tableName: 'QuestionSets'
    });
  
    QuestionSet.associate = function(models) {
      QuestionSet.hasMany(models.QuizLevel, {
        foreignKey: 'question_set_id',
        as: 'quiz_levels'
      });
      QuestionSet.hasMany(models.Question, {
        foreignKey: 'question_set_id',
        as: 'questions'
      });
    };
  
    return QuestionSet;
  };
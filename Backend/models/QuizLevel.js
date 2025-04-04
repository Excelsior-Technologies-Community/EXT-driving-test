// models/QuizLevel.js
module.exports = (sequelize, DataTypes) => {
    const QuizLevel = sequelize.define('QuizLevel', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      vehicle_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'VehicleTypes',
          key: 'id'
        }
      },
      difficulty: {
        type: DataTypes.ENUM('easy', 'medium', 'hard'),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      free_tests_available: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      is_locked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      requires_login: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_fixed_questions: {
        type: DataTypes.BOOLEAN,
        defaultValue: true // Free tests use fixed questions
      },
      question_set_id: {
        type: DataTypes.INTEGER, // References a fixed set of questions
        allowNull: true,
        references: {
          model: 'QuestionSets',
          key: 'id'
        }
      }
    }, {
      timestamps: false,
      tableName: 'QuizLevels'
    });
  
    QuizLevel.associate = function(models) {
      QuizLevel.belongsTo(models.VehicleType, {
        foreignKey: 'vehicle_type_id',
        as: 'vehicle_type'
      });
      QuizLevel.belongsTo(models.QuestionSet, {
        foreignKey: 'question_set_id',
        as: 'question_set'
      });
      QuizLevel.hasMany(models.Question, {
        foreignKey: 'quiz_level_id',
        as: 'questions'
      });
      QuizLevel.hasMany(models.QuizSession, {
        foreignKey: 'quiz_level_id',
        as: 'quiz_sessions'
      });
    };
  
    return QuizLevel;
  };
  
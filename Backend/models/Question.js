// models/Question.js
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id'
      }
    },
    quiz_level_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'QuizLevels',
        key: 'id'
      }
    },
    question_set_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'QuestionSets',
        key: 'id'
      }
    },
    explanation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'Questions'
  });

  Question.associate = function(models) {
    Question.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category'
    });
    Question.belongsTo(models.QuizLevel, {
      foreignKey: 'quiz_level_id',
      as: 'quiz_level'
    });
    Question.belongsTo(models.QuestionSet, {
      foreignKey: 'question_set_id',
      as: 'question_set'
    });
    Question.hasMany(models.Answer, {
      foreignKey: 'question_id',
      as: 'answers',
      onDelete: 'CASCADE'
    });
  };

  return Question;
};
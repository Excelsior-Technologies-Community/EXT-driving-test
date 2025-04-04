// models/QuizSession.js
module.exports = (sequelize, DataTypes) => {
    const QuizSession = sequelize.define('QuizSession', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      session_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      vehicle_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'VehicleTypes',
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
      questions: {
        type: DataTypes.JSON,
        allowNull: false
      },
      answers: {
        type: DataTypes.JSON,
        allowNull: true
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_fixed_set: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'QuizSessions'
    });
  
    QuizSession.associate = function(models) {
      QuizSession.belongsTo(models.VehicleType, {
        foreignKey: 'vehicle_type_id',
        as: 'vehicle_type'
      });
      QuizSession.belongsTo(models.QuizLevel, {
        foreignKey: 'quiz_level_id',
        as: 'quiz_level'
      });
      if (models.User) {
        QuizSession.belongsTo(models.User, {
          foreignKey: 'user_id',
          as: 'user'
        });
      }
    };
  
    return QuizSession;
  };
  
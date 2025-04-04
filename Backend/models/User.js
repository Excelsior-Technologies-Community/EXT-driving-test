// models/User.js (Suggested addition)
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
      }
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'Users'
    });
  
    User.associate = function(models) {
      User.hasMany(models.QuizSession, {
        foreignKey: 'user_id',
        as: 'quiz_sessions'
      });
    };
  
    return User;
  };
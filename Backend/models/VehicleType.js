const sequelize = require("../config/db"); // Adjust path as needed
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const VehicleType = sequelize.define('VehicleType', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING, // 'car', 'motorcycle', 'truck'
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      icon_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
      }
    }, {
      timestamps: false,
      tableName: 'VehicleTypes'
    });
  
    VehicleType.associate = function(models) {
      VehicleType.hasMany(models.QuizLevel, {
        foreignKey: 'vehicle_type_id',
        as: 'quiz_levels'
      });
      VehicleType.hasMany(models.QuizSession, {
        foreignKey: 'vehicle_type_id',
        as: 'quiz_sessions'
      });
    };
  
    return VehicleType;
  };
  
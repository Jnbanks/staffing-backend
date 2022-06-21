const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Department.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    sequelize,
})

module.exports=Department;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Department.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
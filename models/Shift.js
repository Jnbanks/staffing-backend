const { Staff, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Shifts extends Model {}

Shifts.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: { 
        type: DataTypes.DATE,
        allowNull: false,
    }
    // staff_id: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     primaryKey: (id),
    //     foreignKey: (Staff_id),
    //     references: Staff(id)
    // }
},{
    sequelize
})

module.exports=Shifts;
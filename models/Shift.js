const { Staff, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Shifts extends Model {}

Shifts.init({
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: { 
        type: DataTypes.DATE,
        allowNull: false,
    }
},{
    sequelize
})

module.exports=Shifts;
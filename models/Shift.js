const { Staff, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Shift extends Model {}

Shift.init({
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: { 
        type: DataTypes.DATE,
        allowNull: false,
    },
},{
    sequelize
})

module.exports=Shift;
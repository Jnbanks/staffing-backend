const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Staff extends Model {}

Staff.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    keycode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            len:[4]
        }
    },
    first_name: { 
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    on_call: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    special_training: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    notes: {
        type: DataTypes.STRING(1000),
        allowNull: true
    }
},{
    sequelize,
    hooks:{
        beforeCreate: newStaff=>{
            newStaff.key_code = bcrypt.hashSync(newStaff.key_code,3)
            return newStaff
        }
    }
})

module.exports=Staff;
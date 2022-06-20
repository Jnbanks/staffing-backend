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
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            validateKeycode: function(keycode) {
                if(!(/^(?=.*\d)[\d]{4,8}$/.test(keycode))) {
                    throw new Error('The keycode must contain at least 4 and maximum 8 numbers only.');
                }
            }
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
            newStaff.keycode = bcrypt.hashSync(newStaff.keycode,5)
            return newStaff
        }
    }
})

module.exports=Staff;
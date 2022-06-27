const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Staff extends Model {}

Staff.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     autoIncrement: true,
    //     primaryKey: true,
    // },
    // username: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // first_name: { 
    //     type: DataTypes.STRING(35),
    //     allowNull: false,
    // },
    // last_name: {
    //     type: DataTypes.STRING(35),
    //     allowNull: false,
    // },
    position: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    keycode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    on_call: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    special_training: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    //hire_date: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // }
    notes: {
        type: DataTypes.STRING(1000),
        allowNull: true
    }
},{
    sequelize,
    // hooks:{
    //     beforeCreate: newStaff=>{
    //         newStaff.keycode = bcrypt.hashSync(newStaff.keycode,5)
    //         return newStaff
    //     }
    // }
})

module.exports=Staff;
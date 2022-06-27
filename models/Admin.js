const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Admin extends Model {}

Admin.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    // },
    name: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            validatePassword: function(password) {
                          if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,32}$/.test(password))) {
                              throw new Error('The password must contain at least 12 and maximum 32 characters including at least 1 uppercase, 1 lowercase, one number and one special character.');
                          }
                      }
                  },
    },
    phoneNumber: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
},{
    sequelize,
    hooks:{
        beforeCreate: newAdmin=>{
            newAdmin.password = bcrypt.hashSync(newAdmin.password,5)
            return newAdmin
        }
    }
})

module.exports=Admin;
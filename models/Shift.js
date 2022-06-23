const { Staff, Model, Department, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Shift extends Model { }

Shift.init({
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    StaffId: {
        type: DataTypes.INTEGER,
        references: {
            model: Staff, // 'Staff' would also work
            key: "id"
        }
    },
    DepartmentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Department, // 'Staff' would also work
            key: "id"
        }
    }
}, {
    sequelize
})

module.exports = Shift;
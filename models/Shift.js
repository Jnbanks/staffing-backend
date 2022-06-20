const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Shift extends Model {}

Shift.init({
    id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    // TODO: change the allowNull property to false for the next three rows.
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // references: {
        //     model: 'Department',
        //     key: 'id',
        //   },
    },
    start_datetime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    end_datetime: { 
        type: DataTypes.DATE,
        allowNull: true,
    },
    rn1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Staff',
          key: 'id',
        },
    },
    // rn2: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn3: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn4: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn5: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn6: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn7: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn8: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn9: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn10: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn11: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn12: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn13: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn14: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn15: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn16: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn17: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn18: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn19: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // rn20: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // cna1: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // cna2: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // cna3: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // cna4: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // cna5: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // cna6: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // cna7: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // cna8: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // lpn1: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // lpn2: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // lpn3: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // lpn4: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // lpn5: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
    // lpn6: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //       model: 'Staff',
    //       key: 'id',
    //     },
    // },
},{
    sequelize,
})

module.exports=Shift;
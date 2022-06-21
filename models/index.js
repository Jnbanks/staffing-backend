const Admin = require("./Admin")
const Staff = require("./Staff")
const Shift = require("./Shift")
const Department = require("./Department")

Admin.hasMany(Staff);
Staff.belongsTo(Admin);

Staff.hasMany(Shift);
Shift.belongsTo(Staff);

Staff.hasMany(Department);
Department.belongsTo(Staff);

Department.hasMany(Shift);
Shift.belongsTo(Department);

module.exports= {
    Admin,
    Staff,
    Shift,
    Department
}
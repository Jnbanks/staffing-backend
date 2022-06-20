const Admin = require("./Admin")
const Staff = require("./Staff")
const Shift = require("./Shift")
const Department = require("./Department")

Admin.hasMany(Staff);
Staff.belongsTo(Admin);

module.exports= {
    Admin,
    Staff,
    Shift,
    Department
}
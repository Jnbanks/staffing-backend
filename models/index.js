const Admin = require("./Admin")
const Staff = require("./Staff")

Admin.hasMany(Staff);
Staff.belongsTo(Admin);

module.exports= {
    Admin,
    Staff
}
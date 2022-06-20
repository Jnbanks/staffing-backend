const express = require('express');
const router = express.Router();

const adminRoutes = require("./adminController")
router.use("/api/admin",adminRoutes)

const staffRoutes = require("./staffController")
router.use("/api/staff",staffRoutes)

const deptRoutes = require("./deptController")
router.use("/api/depts",deptRoutes)

const shiftRoutes = require("./shiftController")
router.use("/api/shifts",shiftRoutes)


module.exports = router;
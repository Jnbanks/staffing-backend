const express = require("express");
const router = express.Router();
const {Department} = require("../models");
const {withAuth} = require("../utils/tokenAuth")

// localhost:3001/api/depts
router.get("/", (req, res) => {
  Department.findAll()
    .then((departments) => {
      res.json(departments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
router.get("/:id", (req, res) => {
  Department.findByPk(req.params.id, {
  })
    .then((department) => {
      if (!department) {
        return res.status(404).json({ msg: "no record found!" });
      }
      res.json(department);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {
  //TODO: protecc route, get UserId from token
//   console.log(req.user)
  Department.create(req.body, {
    // department_id:req.body.department_id,
    name:req.body.name,
  })
    .then((newDepartment) => {
      res.json(newDepartment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.put("/:id", withAuth,(req, res) => {
  Department.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedDepartment) => {
      if (!updatedDepartment[0]) {
        return res.status(404).json({ msg: "no such Department" });
      }
      res.json(updatedDepartment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.delete("/:id", withAuth,(req, res) => {
  Department.destroy({
    where: {
      id: req.params.id
    },
  })
    .then((delDepartment) => {
      if (!delDepartment) {
        return res.status(404).json({ msg: "no such Department" });
      }
      res.json(delDepartment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
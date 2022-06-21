const express = require("express");
const router = express.Router();
const {Shift, Staff, Admin, Department} = require("../models");
const {withAuth} = require("../utils/tokenAuth")


router.get("/", (req, res) => {
  Shift.findAll()
    .then((shifts) => {
      res.json(shifts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
router.get("/:id", (req, res) => {
  Shift.findByPk(req.params.id, {
    include: [Staff, Department],
  })
    .then((shift) => {
      if (!shift) {
        return res.status(404).json({ msg: "no record found!" });
      }
      res.json(shift);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", withAuth, (req, res) => {
  //TODO: protecc route, get UserId from token
//   console.log(req.user)
  Shift.create({
      department_id:req.body.department.id,
      startTime:req.body.startTime,
      endTime:req.body.endTime,
      StaffId: req.body.staff.id
  })
    .then((newShift) => {
      res.json(newShift);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.put("/:id", withAuth,(req, res) => {
  Shift.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedShift) => {
      if (!updatedShift[0]) {
        return res.status(404).json({ msg: "no such shift" });
      }
      res.json(updatedShift);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.delete("/:id", withAuth,(req, res) => {
  Shift.destroy({
    where: {
      id: req.params.id
    },
  })
    .then((delShift) => {
      if (!delShift) {
        return res.status(404).json({ msg: "no such Shift" });
      }
      res.json(delShift);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
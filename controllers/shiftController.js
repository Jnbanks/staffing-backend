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
  Shift.create(req.body
    //   department_id:req.body.department_id,
    //   start_datetime:req.body.start_datetime,
    //   end_datetime:req.body.end_datetime,
    //   rn1:req.body.rn1,
    //   rn2:req.body.rn2,
    //   rn3:req.body.rn3,
    //   rn4:req.body.rn4,
    //   rn5:req.body.rn5,
    //   rn6:req.body.rn6,
    //   rn7:req.body.rn7,
    //   rn8:req.body.rn8,
    //   rn9:req.body.rn9,
    //   rn10:req.body.rn10,
    //   rn11:req.body.rn11,
    //   rn12:req.body.rn12,
    //   rn13:req.body.rn13,
    //   rn14:req.body.rn14,
    //   rn15:req.body.rn15,
    //   rn16:req.body.rn16,
    //   rn17:req.body.rn17,
    //   rn18:req.body.rn18,
    //   rn19:req.body.rn19,
    //   rn20:req.body.rn20,
    //   cna1:req.body.cna1,
    //   cna2:req.body.cna2,
    //   cna3:req.body.cna3,
    //   cna4:req.body.cna4,
    //   cna5:req.body.cna5,
    //   cna6:req.body.cna6,
    //   cna7:req.body.cna7,
    //   cna8:req.body.cna8,
    //   lpn1:req.body.lpn1,
    //   lpn2:req.body.lpn2,
    //   lpn3:req.body.lpn3,
    //   lpn4:req.body.lpn4,
    //   lpn5:req.body.lpn5,
    //   lpn6:req.body.lpn6,
    //   AdminId:req.admin
  )
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
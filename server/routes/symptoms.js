const express = require("express");
const router = express.Router();
const symptomsController = require("../controllers/symptoms");

// Post Routes

router.get("/:id", symptomsController.getSymptom);

// addSymptom, deleteSymptom


module.exports = router;
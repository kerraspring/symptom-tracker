const express = require("express");
const router = express.Router();
const symptomsController = require("../controllers/symptom");

// Post Routes

router.get("/:id", symptomsController.getSymptom);

// addSymptom, deleteSymptom


module.exports = router;
const express = require("express");
const router = express.Router();
const symptomsController = require("../controllers/symptoms");

// Symptom Routes

// ensure authentication for user to grab their symptoms
router.get("/:id", symptomsController.getSymptom);

// addSymptom, deleteSymptom


module.exports = router;

const express = require("express");
const router = express.Router();
const postsController = require("../controllers/symptom");

// Post Routes

router.get("/:id", postsController.getSymptom);

// addSymptom, deleteSymptom


module.exports = router;
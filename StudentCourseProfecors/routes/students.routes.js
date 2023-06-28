const express = require('express');
const router = express.Router();

const studentsController = require("../controllers/students.controller");

router.get('/findAll', studentsController.findAll);
router.get('/findOne/:lastname', studentsController.findOne);
router.post('/create', studentsController.create);
router.patch('/update/:username',studentsController.update);
router.delete('/delete/:username', studentsController.delete);
router.get('/grades/:username', studentsController.findOneGrades);
router.patch('/updateGrades/:username',studentsController.updateGrades);

module.exports = router;

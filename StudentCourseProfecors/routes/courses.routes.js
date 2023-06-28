const express = require('express');
const router = express.Router();

const coursesController = require("../controllers/courses.controller");

router.get('/findAll', coursesController.findAll);
router.get('/findOne/:course', coursesController.findOne);
router.post('/create', coursesController.create);
router.patch('/update/:course',coursesController.update);
router.delete('/delete/:course', coursesController.delete);

module.exports = router;
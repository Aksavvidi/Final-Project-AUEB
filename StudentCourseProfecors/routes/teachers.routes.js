const express = require('express');
const router = express.Router();

const teachersController = require("../controllers/teachers.controller");

router.get('/findAll', teachersController.findAll);
router.get('/findOne/:lastname', teachersController.findOne);
router.post('/create', teachersController.create);
router.patch('/update/:username',teachersController.update);
router.delete('/delete/:username', teachersController.delete);

module.exports = router;
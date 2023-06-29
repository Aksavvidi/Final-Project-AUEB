const { error } = require('winston');
const Teachers = require('../models/teachers.model');

exports.findAll = async (req, res) => {
    try {
        const teachers = await Teachers.find();
        res.status(200).json({teachers});
            console.log('Success in finding teachers');

    }catch (error) {
        res.status(400).json({error: "Problem in finding teachers"});
        console.log( error);
    }
};
exports.findOne = async (req, res) => {
    try {
      const username = req.params.username;
  
      console.log('Find teacher with username', username);
  
      const teacher = await Teachers.findOne({ username });
  
      if (!teacher) {
        return res.status(404).json({ status: false, data: 'Teacher not found' });
      }
  
      res.status(200).json({ status: true, data: teacher });
      console.log('Success in finding teacher', username);
    } catch (error) {
      console.error(`Problem in finding teacher with lastname ${username}`, error);
      res.status(400).json({ status: false, data: error });
    }
  };

  exports.create = async (req, res) => {
    try {
      const newTeacher = new Teachers({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        course: req.body.course,
        phone: req.body.phone,
      });
  
      const createdTeacher = await newTeacher.save();
  
      res.status(201).json({ status: true, data: createdTeacher });
      console.log('Success in creating student', createdTeacher);
    } catch (error) {
      console.error('Error in creating student', error);
      res.status(400).json({ status: false, data: error });
    }
  };

  exports.update = async (req, res) => {
   
      const teacherUsername = req.params.username;
      const updatedData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      course: req.body.course,
      phone: req.body.phone,
      };
      console.log("username found: " + teacherUsername);
      console.log(updatedData);
      try{
      const updatedTeacher = await Teachers.findOneAndUpdate({username:teacherUsername}, updatedData, { new: true });
  
      res.status(200).json({ status: true, data: updatedTeacher });
      console.log('Success in updating teacher', updatedTeacher);
      
      }catch (error) {
        console.log('Error in updating teacher', error);
        res.status(400).json({ status: false, data: error });
      }
  
  } 

  exports.delete = async(req, res) =>{
    try{
        const username = req.params.username;
        const deletedTeacher = await Teachers.findOneAndDelete({username:username});

    if (!deletedTeacher) {
      return res.status(404).json({ status: false, message: 'Teacher not found' });
    }

    res.status(200).json({ status: true, message: 'Teacher deleted successfully' });
    console.log('Success in deleting teacher', deletedTeacher);
  } catch (error) {
    console.error('Error in deleting teacher', error);
    res.status(400).json({ status: false, data: error });
  }
};
  
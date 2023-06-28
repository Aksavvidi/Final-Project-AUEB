const Students = require('../models/students.model');


exports.findAll = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json({ students });
    console.log('Success in finding Students');

  } catch (error) {
    res.status(400).json({ error: "Problem in finding Students" });
    console.log(error);
  }
};

exports.findOne = async (req, res) => {
  try {
    const lastname = req.params.lastname;

    console.log('Find student with lastname', lastname);

    const student = await Students.findOne({ lastname });

    if (!student) {
      return res.status(404).json({ status: false, data: 'Student not found' });
    }

    res.status(200).json({ status: true, data: student });
    console.log('Success in finding student', lastname);
  } catch (error) {
    console.error(`Problem in finding student with lastname ${lastname}`, error);
    res.status(400).json({ status: false, data: error });
  }
};

exports.create = async (req, res) => {
  try {
    const newStudent = new Students({
      username: req.body.username,
      password: req.body.Password,
      Firstname: req.body.Firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      courses:req.body.courses
    });

    const createdStudent = await newStudent.save();

    res.status(201).json({ status: true, data: createdStudent });
    console.log('Success in creating student', createdStudent);
  } catch (error) {
    console.error('Error in creating student', error);
    res.status(400).json({ status: false, data: error });
  }
};

exports.update = async  function (req, res) {
    const studentUsername = req.params.username;

    const updatedData = {
      Firstname: req.body.Firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone
    };

    console.log("username found: " + studentUsername);
    console.log(updatedData);


    try {
      console.log("req.params.username: " + req.params.username);

      const result = await Students.findOneAndUpdate(
        { username: studentUsername },
        updatedData,
        { new: true }
      );
  
      res.status(200).json({ status: true, data: result });
      console.log('Success in updating student');
    } catch (err) {
      res.status(400).json({ status: false, data: err });
      console.log('Error in updating student', err);
    }
  };  
  


exports.delete = async (req, res) => {
  try {
    const username = req.params.username;
    const deletedStudent = await Students.findOneAndDelete({ username: username });

    if (!deletedStudent) {
      return res.status(404).json({ status: false, message: 'Student not found' });
    }

    res.status(200).json({ status: true, message: 'Student deleted successfully' });
    console.log('Success in deleting student', deletedStudent);
  } catch (error) {
    console.error('Error in deleting student', error);
    res.status(400).json({ status: false, data: error });
  }

};

exports.findOneGrades = async (req, res) => {
  try {
    const username = req.params.username;

    console.log('Find grade with username', username);

    const studentGrades = await Students.findOne({ username },
      { Firstname: 1, lastname: 1, 'courses.course': 1, 'courses.grade': 1, _id: 0 });
    console.log(studentGrades);
    if (!studentGrades) {
      return res.status(404).json({ status: false, data: 'Student not found' });
    }

    res.status(200).json({ status: true, data: studentGrades });
    console.log('Success in finding student grades', username);
  } catch (error) {
    console.error(`Problem in finding student grades with username ${username}`, error);
    res.status(400).json({ status: false, data: error });
  }
};

exports.updateGrades = async function (req, res) {
 
    const studentUsername = req.params.username;

    const updatedData = {
      courses: req.body.courses
    };
    console.log(updatedData);
    try{
    const updatedGrades = await Students.findOneAndUpdate({ username: studentUsername }, updatedData, { new: true });

    res.status(200).json({ status: true, data: updatedGrades });
    console.log('Success in updating student grades');

    }catch (error) {
      console.log('Error in updating student grades', error);
      res.status(400).json({ status: false, data: error });
    } 
  }
   



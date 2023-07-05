const { error } = require('winston');
const Courses = require('../models/courses.model');

exports.findAll = async (req, res) => {
    try {
        const courses = await Courses.find();
        res.status(200).json({courses});
            console.log('Success in finding Course');

    }catch (error) {
        res.status(400).json({error: "Problem in finding Course"});
        console.log( error);
    }
};

exports.findOne = async (req, res) => {
    try {
      const name = req.params.course;
  
      console.log('Find course with name', name);
  
      const course = await Courses.findOne({name});
  
      if (!course) {
        return res.status(404).json({ status: false, data: 'Course not found' });
      }
  
      res.status(200).json({ status: true, data: course });
      console.log(data);
      console.log('Success in finding course', name);
    } catch (error) {
      console.error(`Problem in finding student with course ${name}`, error);
      res.status(400).json({ status: false, data: error });
    }
  };

  exports.create = async (req, res) => {
    try {
      const newCourse = new Courses({
        course: req.body.course,
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        Teacher:req.body.Teacher
      });
  
      const createdCourse = await newCourse.save();
  
      res.status(201).json({ status: true, data: createdCourse });
      console.log('Success in creating new course', createdCourse);
    } catch (error) {
      console.error('Error in creating new course', error);
      res.status(400).json({ status: false, data: error });
    }
  };

  exports.update = async (req, res) => {
    
      const courseName = req.params.course;
      const updatedData = {
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        Teacher:req.body.Teacher
      };
      try{
      const updatedCourse = await Courses.findOneAndUpdate({ course: courseName}, updatedData, { new: true });
    
      res.status(200).json({ status: true, data: updatedCourse });
      console.log('Success in updating course');
    } catch (error) {
      console.log('Error in updating course', error);
      res.status(400).json({ status: false, data: error });
    }
  };

  exports.delete = async (req, res) => {
    try {
      const courseName = req.params.course;
      const deletedCourse = await Courses.findOneAndDelete({ course: courseName });
  
      if (!deletedCourse) {
        return res.status(404).json({ status: false, message: 'Course not found' });
      }
  
      res.status(200).json({ status: true, message: 'Course deleted successfully' });
      console.log('Success in deleting course', deletedCourse);
    } catch (error) {
      console.error('Error in deleting course', error);
      res.status(400).json({ status: false, data: error });
    }
  };
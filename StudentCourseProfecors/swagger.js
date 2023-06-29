const m2s = require('mongoose-to-swagger');
const Students = require('./models/students.model');
const Teachers = require('./models/teachers.model');
const Courses = require('./models/courses.model');
const { application } = require('express');

exports.options = {
    "definitions":{
        Students: m2s(Students),
        Teachers: m2s(Teachers),
        Courses: m2s(Courses)
    },
    "swagger":"2.0",
    "info":{
        "version": "1.0",
        "description": "Bootcamp Project Application API. A web application for the students and the teachers of a boot Camp. Helping them to find their courses(date of start or end), find a teacher or a student or find  each student their grades etc..",
        "title": "Students CRUD API"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {
            "name": "Students",
            "description" : "API for students"
        },
        {
            "name": "Teachers",
            "description" : "API for teachers"
        },
        {
            "name": "Courses",
            "description" : "API for courses"
        },
        {
            "name": "Grades",
            "description":"API for students grades"
        }
    ],
    "schemes":["http"],
    "consumes":["application/json"],
    "produces":["application/json"],
    "paths":{
        "/api/students/findAll":{
            "get":{
                "tags": [
                    "Students"
                ],
                "summary": "Gets all students from the database",
                "responses":{
                    "200":{
                        "description": "OK",
                        "schema":{
                            "$ref":"#/definitions/Students"
                        }                  
                    }
                }
            }
        },
        "/api/students/findOne/{lastname}":{
            "get":{
                "tags": [
                    "Students"
                ],
                "parameters":[
                    {
                        "name":"lastname",
                        "in":"path",
                        "required":false,
                        "description":"Lastname of Students",
                        "type":"string"
                    }
                ],
                "summary": "Gets a student from the database by lastname",
                "responses":{
                    "200":{
                        "description": "Student find",
                        "schema":{
                            "$ref":"#/definitions/Students"
                        }                  
                    }
                }
            }
        },
        "/api/students/create":{
            "post":{
                "tags": [
                    "Students"
                ],
                "description":"Create a new student and save in database",
                "parameters":[
                    {
                        "name":"Parameters for student",
                        "in":"body",
                        "description":"Students parameters that we will create",
                        "schema":{
                            "type":"object",
                            "properties":{
                                "username":{ "type": "string" },
                                "Password":{ "type": "string" },
                                "Firstname":{ "type": "string" },
                                "lastname":{ "type": "string" },
                                "email":{ "type": "string" },
                                "address": {
                                    "type": "object",
                                    "properties": {
                                      "area": { "type": "string" },
                                      "road": { "type": "string" },
                                      "postcode": { "type": "string" }
                                    },
                                 },
                                 "phone": {
                                  "type":"array",
                                  "items":{
                                    "type": "object",
                                    "properties": {
                                      "type": { "type": "string" },
                                      "number": { "type": "string" }
                                    },
                                  },
                                },
                                "courses":{
                                    "type":"array",
                                  "items":{
                                    "type": "object",
                                    "properties":{

                                    },
                                  },
                                },
                            },
                            "required": ["username", "Password","email"]
                        }             
                    }
                ], 
                "produces":["application/json"],
                "responses":{
                    "201":{
                        "description": "Student created",                
                    }
                }
            },
        },
            "/api/students/update/{username}":{
                "patch":{
                    "tags": [
                        "Students"
                    ],
                    "description":"Update a student and save in database",
                    "parameters":[
                        {
                            "name":"Update Student",
                            "in":"body",
                            "description":"Students that we will update",
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "username":{ "type": "string" },
                                    "Firstname":{ "type": "string" },
                                    "lastname":{ "type": "string" },
                                    "email":{ "type": "string" },
                                    "address": {
                                        "type": "object",
                                        "properties": {
                                          "area": { "type": "string" },
                                          "road": { "type": "string" },
                                          "postcode": { "type": "string" }
                                        },
                                     },
                                     "phone": {
                                      "type":"array",
                                      "items":{
                                        "type": "object",
                                        "properties": {
                                          "type": { "type": "string" },
                                          "number": { "type": "string" }
                                        },
                                      },
                                    },
                                },
                                "required": ["email"]
                            }              
                        }
                    ], 
                    "produces":["application/json"],
                    "responses":{
                        "200":{
                            "description": "Student updated",                 
                        }
                    }
                }
            },
            "/api/students/delete/{username}":{
                "delete":{
                    "tags":[
                        "Students"
                    ],
                    "description": "Deletes a student",
                    "parameters":[{
                        "name": "username",
                        "in": "path",
                        "description": "Student that will be deleted"
                    }],
                    "responses":{
                        "200":{
                            "description":"Deleted student"
                        }
                    }
                }
            },
            "/api/teachers/findAll":{
                "get":{
                    "tags": [
                        "Teachers"
                    ],
                    "summary": "Gets all teachers from the database",
                    "responses":{
                        "200":{
                            "description": "OK",
                            "schema":{
                                "$ref":"#/definitions/Teachers"
                            }                  
                        }
                    }
                }
            },
            "/api/teachers/findOne/{username}":{
                "get":{
                    "tags": [
                        "Teachers"
                    ],
                    "parameters":[
                        {
                            "name":"username",
                            "in":"path",
                            "required":false,
                            "description":"Lastname of Teachers",
                            "type":"string"
                        }
                    ],
                    "summary": "Gets a Teacher from the database by username",
                    "responses":{
                        "200":{
                            "description": "Teacher find",
                            "schema":{
                                "$ref":"#/definitions/Teachers"
                            }                  
                        }
                    }
                }
            },
            "/api/teachers/create":{
                "post":{
                    "tags": [
                        "Teachers"
                    ],
                    "description":"Create a new Teacher and save in database",
                    "parameters":[
                        {
                            "name":"Parameters for teacher",
                            "in":"body",
                            "description":"Teachers parameters that we will create",
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "username":{ "type": "string" },
                                    "password":{ "type": "string" },
                                    "firstname":{ "type": "string" },
                                    "lastname":{ "type": "string" },
                                    "email":{ "type": "string" },
                                    "course":{"type":"string"},
                                    "phone": {
                                      "type":"array",
                                      "items":{
                                        "type": "object",
                                        "properties": {
                                          "type": { "type": "string" },
                                          "number": { "type": "string" }
                                        },
                                      },
                                    },
                                },
                                "required": ["username", "Password","email"]
                            }             
                        }
                    ], 
                    "produces":["application/json"],
                    "responses":{
                        "201":{
                            "description": "Teacher created",                
                        }
                    }
                },
            },
            "/api/teachers/update/{username}":{
                "patch":{
                    "tags": [
                        "Teachers"
                    ],
                    "description":"Update a teacher and save in database",
                    "parameters":[
                        {
                            "name":"Update teacher",
                            "in":"body",
                            "description":"Teacher that we will update",
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "username":{ "type": "string" },
                                    "firstname":{ "type": "string" },
                                    "lastname":{ "type": "string" },
                                    "email":{ "type": "string" },
                                    "course":{"type":"string"},
                                     "phone": {
                                      "type":"array",
                                      "items":{
                                        "type": "object",
                                        "properties": {
                                          "type": { "type": "string" },
                                          "number": { "type": "string" }
                                        },
                                      },
                                    },
                                },
                            }              
                        }
                    ], 
                    "produces":["application/json"],
                    "responses":{
                        "200":{
                            "description": "Teacher updated",                 
                        }
                    }
                }
            },
            "/api/teachers/delete/{username}":{
                "delete":{
                    "tags":[
                        "Teachers"
                    ],
                    "description": "Deletes a teacher",
                    "parameters":[{
                        "name": "username",
                        "in": "path",
                        "description": "Teachers that will be deleted"
                    }],
                    "responses":{
                        "200":{
                            "description":"Deleted teacher"
                        }
                    }
                }
            },
            "/api/courses/findAll":{
                "get":{
                    "tags": [
                        "Courses"
                    ],
                    "summary": "Gets all courses from the database",
                    "responses":{
                        "200":{
                            "description": "OK",
                            "schema":{
                                "$ref":"#/definitions/Courses"
                            }                  
                        }
                    }
                }
            },
            "/api/courses/findOne/{course}":{
                "get":{
                    "tags": [
                        "Courses"
                    ],
                    "parameters":[
                        {
                            "name":"course",
                            "in":"path",
                            "required": true,
                            "description":"Name of course",
                            "type":"string"
                        }
                    ],
                    "summary": "Gets a course from the database by its name",
                    "responses":{
                        "200":{
                            "description": "Course find",
                            "schema":{
                                "$ref":"#/definitions/Courses"
                            }                  
                        }
                    }
                }
            },
            "/api/courses/create":{
                "post":{
                    "tags": [
                        "Courses"
                    ],
                    "description":"Create a new course and save in database",
                    "parameters":[
                        {
                            "name":"Parameters for courses",
                            "in":"body",
                            "description":"Courses parameters that we will create",
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "course":{ "type": "string" },
                                    "StartDate":{ "type": "string" },
                                    "EndDate":{ "type": "string" },
                                    "Teacher":{ "type": "string" },
                                },
                                "required": ["course"]           
                            }
                        }
                    ], 
                    "produces":["application/json"],
                    "responses":{
                        "201":{
                            "description": "Teacher created",                
                        }
                    }
                },
            },
            "/api/courses/update/{course}":{
                "patch":{
                    "tags": [
                        "Courses"
                    ],
                    "description":"Update a course and save in database",
                    "parameters":[
                        {
                            "name":"Update course",
                            "in":"body",
                            "description":"Course that we will update",
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "course":{ "type": "string" },
                                    "StartDate":{ "type": "string" },
                                    "EndDate":{ "type": "string" },
                                    "Teacher":{ "type": "string" },
                                }, 
                            },
                            "required": ["course"]             
                        }
                    ], 
                    "produces":["application/json"],
                    "responses":{
                        "201":{
                            "description": "Course updated",                 
                        }
                    }
                }
            }, 
            "/api/courses/delete/{course}":{
                "delete":{
                    "tags":[
                        "Courses"
                    ],
                    "description": "Deletes a course",
                    "parameters":[{
                        "name": "course",
                        "in": "path",
                        "description": "Courses that will be deleted"
                    }],
                    "responses":{
                        "200":{
                            "description":"Deleted course"
                        }
                    }
                }
            },
            "/api/students/grades/{username}":{
                "get":{
                    "tags": [
                        "Grades"
                    ],
                    "parameters":[
                        {
                            "name":"username",
                            "in":"path",
                            "required":false,
                            "description":"Find grades of Students by username",
                            "type":"string"
                        }
                    ],
                    "summary": "Gets a student;s grade  from the database by username",
                    "responses":{
                        "200":{
                            "description": "Student grades find",       
                        }
                    }
                }
            },
            "/api/students//updateGrades/{username}":{
                "patch":{
                    "tags": [
                        "Grades"
                    ],
                    "description":"Update student grades and save in database",
                    "parameters":[
                        {
                            "name":"Update Student's grades",
                            "in":"body",
                            "description":"Student's grades that we will update",
                            "schema":{
                                "type":"object",
                                "properties":{
                                    "username":{ "type": "string" },
                                    "Firstname": { "type": "string" },
                                    "lastname":{ "type": "string" },
                                    "courses": {
                                        "type":"array",
                                        "items":{
                                          "type": "object",
                                          "properties": {
                                            "course": { "type": "string" },
                                            "grade": { "type": "string" }
                                          },
                                        },
                                      },
                                },
                                "required": ["email"]
                            }              
                        }
                    ], 
                    "produces":["application/json"],
                    "responses":{
                        "200":{
                            "description": "Student's grades updated",                 
                        }
                    }
                }
            },
    }
}



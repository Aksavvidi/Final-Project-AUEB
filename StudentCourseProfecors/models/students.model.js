const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let addressSchema = new Schema({
    area:{type: String},
    road:{type: String},
    postcode:{type: String},
}, {_id: false});

let phoneSchema = new Schema({
    type: {type: String},
    number: {type: String}
}, {_id: false});

let coursesSchema = new Schema({
    course: {type: String},
    grade: {type:String},
}, {_id: false});

let studentsSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true
    },
    Password:{
        type: String,
        //required: [true, 'Password is required field'],
        max: 100,
        trim: true,
        lowercase: true
    },
    Firstname: {
        type: String,
        max: 100,
    },
    lastname: {
        type: String,
        max: 100,
    },
    email: {
        type: String,
        required: [true, 'email is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true,
       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
               , "Email address is not valid"
            ]
    },
    address: addressSchema,
    phone: {type: [phoneSchema], null: true}, 
    courses:{type:[coursesSchema], null:true},
},{
     collection: 'Students',
     timestamps: true 
});

studentsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Students',studentsSchema );

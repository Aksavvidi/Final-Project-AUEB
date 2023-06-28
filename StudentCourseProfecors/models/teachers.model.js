const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let phoneSchema = new Schema({
    office: {type: String},
    mobile: {type: String}
}, {_id: false});

let teachersSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true, 'Password is required field'],
        max: 100,
        trim: true,
        lowercase: true
    },
    firstname: {
        type: String,
        max: 100,
    },
    lastname: {
        type: String,
        max: 100,
        trim: true,
        lowercase: true
    },
    course: {
        type: String,
        max: 100,
    },
    email: {
        type: String,
        //required: [true, 'email is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true,
       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
               , "Email address is not valid"
            ]
    },
    phone: {type: [phoneSchema], null: true}
},{
     collection: 'Teachers',
     timestamps: true 
});

teachersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Teachers',teachersSchema );


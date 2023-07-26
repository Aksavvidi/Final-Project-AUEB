const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let courseSchema = new Schema ({
    course:  {
        type: String,
        required: [true, 'Courses name is required field'],
        max: 100,
        trim: true,
        lowercase: true
    },
    StartDate :{
        type: String,
        _id: false,
        null: true,
    },
    EndDate :{
        type: String,
        _id: false,
        null: true,
    },
    Teacher: {
        type: String,
        max: 100,
        null: true
    }
},{
    collection: 'Courses',
    timestamps: true 
});

courseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Courses',courseSchema );
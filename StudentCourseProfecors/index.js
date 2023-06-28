const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const mongoose = require('mongoose');
require("dotenv").config(); 

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

// const cors = require('cors');
// app.use(cors({
//     origin: '*' 
// }))


mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

const students = require("./routes/students.routes");
const teachers = require("./routes/teachers.routes");
const courses = require("./routes/courses.routes");

//Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
  
app.use('/api/students', students);
app.use('/api/teachers', teachers);
app.use('/api/courses', courses);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument.options)
);

app.listen(port, () => {
    console.log(`Server is listening in port ${port}`);
});
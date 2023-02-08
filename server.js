const express = require('express'),
      dbOperations = require('./dbFiles/dbOperations'),
      Employee = require('./dbFiles/employee'),
      cors    = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

// defining some variables for mongoDB
let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api01', async (req, res) => {
    console.log('Called to fetch');
    const result = await dbOperations.getEmployees(req.body.name);   // const result = await dbOperations.getEmployees(); // res.send(result)
    res.send(result.recordset); //API Result Back
})

app.post('/api02', async (req, res) => {
    console.log('Called to ADD');
    await dbOperations.insertEmployee(req.body); // wait to insert the employee into the table
    const result = await dbOperations.getEmployees(req.body.First_name); // wait to get the employees from the table then store it in result
    res.send(result.recordset); //send back the result to UI component
})

app.post('/hello', function (req, res){
    console.log('Called quit');
    res.send({result: 'OMG HI'})
})

let Pam = new Employee(1002, 'Pam', 'Beezley', 25, 'Female')
let Micke = new Employee(1003, 'Micke', 'Muckloskey', 31, 'Male')


// console.log(Pam)

// dbOperations.getEmployees();

// dbOperations.createEmployee(Micke);
// dbOperations.dropEmployee(1003)


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

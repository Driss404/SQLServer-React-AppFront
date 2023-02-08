const express = require('express'),
      dbOperation = require('./dbFiles/dbOperation'),
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

app.post('/api', async (req, res) => {
    console.log('Called');
    const result = await dbOperation.getEmployees(req.body.name);   // const result = await dbOperation.getEmployees(); // res.send(result)
    res.send(result.recordset); //API Result Back
})

//POST property that create the api and requeste the insertEmployee() from dbOperation
app.post('/api02', async (req, res) => {
    console.log('Called to ADD');
    const opeResult = await dbOperation.insertEmployee(req.body.Employee);
    res.send(opeResult.recordset); //API Result Back
})

app.post('/hello', function (req, res){
    console.log('Called quit');
    res.send({result: 'OMG HI'})
})

let Pam = new Employee(1002, 'Pam', 'Beezley', 25, 'Female')
let Micke = new Employee(1003, 'Micke', 'Muckloskey', 31, 'Male')


// console.log(Pam)

// dbOperation.getEmployees();

// dbOperation.createEmployee(Micke);
// dbOperation.dropEmployee(1003)


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

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

app.POST('/api', async (req, res)=>{
    console.log('Called');
    const result = await dbOperation.getEmployees();
    res.send(result)
})

app.post('/hello', function (req, res){
    console.log('Called quit');
    res.send({result: 'OMG HI'})
})

let Pam = new Employee(1002, 'Pam', 'Beezley', 25, 'Female')

// console.log(Pam)

// dbOperation.createEmployee(Pam);
// dbOperation.dropEmployee(1002)


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

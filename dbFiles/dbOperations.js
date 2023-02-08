const   config  = require('./dbConfig'),
        sql     = require('mssql');

const getEmployees = async(fname) => {
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request()
            .query(`SELECT * FROM EmployeeDemographics WHERE First_name = '${fname}'`)
            // .query(`SELECT * FROM EmployeeDemographics`) 
        console.log(employee);
        return employee;
    }
    catch(error) {
        console.log(error);
    }
}

const insertEmployee = async(employee) => {
    try{
        // const table = 'EmployeeDemographics'; <<<
        let pool = await sql.connect(config);
        let newEmp = await pool.request()
        .query( `INSERT INTO EmployeeDemographics VALUES(
            ${employee.Employee_id}, '${employee.First_name}', '${employee.Last_name}', ${employee.Age}, '${employee.Gender}');
            `)

        console.log(`New Employee have been added to Table EmployeeDemographics, which is :
            (${employee.Employee_id}, '${employee.First_name}', '${employee.Last_name}', ${employee.Age}, '${employee.Gender}'   ); `)

        return;
    }
    catch(error){
        console.log(error);
    }
}

const createEmployee = async(EMPLOYEE) => {
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request()
        .query(`INSERT INTO EmployeeDemographics VALUES
            (${EMPLOYEE.Employee_id}, '${EMPLOYEE.First_name}', '${EMPLOYEE.Last_name}', ${EMPLOYEE.Age}, '${EMPLOYEE.Gender}');
            `)
        console.log(`SELF MESS: New Employee added to table EmployeeDemographics which is :
        (${EMPLOYEE.EmployeeID} -- '${EMPLOYEE.Firstname}' -- '${EMPLOYEE.Lastname}' -- ${EMPLOYEE.Age} -- '${EMPLOYEE.Gender}');`)

        return employee;
    }
    catch(error) {
        console.log(error);
    }
}

const dropEmployee = async(ID) => {
    try {
        let pool = await sql.connect(config);

        let getEmployee = await pool.request()
            .query(`SELECT * FROM EmployeeDemographics WHERE Employee_id = ${ID};`)

        let dropEmployee = pool.request()
            .query(` DELETE FROM EmployeeDemographics WHERE ${ID} = Employee_id;`)

        console.log(`MESS>>> Employee dropped from table EmployeeDemographics which is:
            ${JSON.stringify(getEmployee.recordset[0].Employee_id+' -- '+getEmployee.recordset[0].First_name+ ' -- ' +getEmployee.recordset[0].Last_name)}`)

        return dropEmployee;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getEmployees,
    createEmployee,
    dropEmployee,
    insertEmployee
};


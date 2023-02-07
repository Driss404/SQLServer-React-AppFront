const   config  = require('./dbConfig'),
        sql     = require('mssql');

const getEmployees = async() => {
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().query(`SELECT * FROM EmployeeDemographics`) 
        console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

const createEmployee = async(Employee) => {
    try {
        let pool = await sql.connect(config);
        let employees = pool.request()
        .query(`INSERT INTO EmployeeDemographics VALUES
            (${Employee.EmployeeID}, '${Employee.Firstname}', '${Employee.Lastname}', ${Employee.Age}, '${Employee.Gender}');
            `)
            
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}
// const dropEmployee = async(ID) => {
//     try {
//         let pool = await sql.connect(config);
//         let employees = pool.request()
//         .query(` DELETE FROM EmployeeDemographics WHERE ${ID} = Employee_id; `)
            
//         return employees;
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

module.exports = {
    getEmployees,
    createEmployee,
    // dropEmployee
};


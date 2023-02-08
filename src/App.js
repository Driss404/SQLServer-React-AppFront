import './App.css';
import React, {useState, /*useEffect*/} from 'react';
import axios from 'axios';

function App() {
  const [returnedData, setReturnedData] = useState(['helloo']);
  const [employee, setEmployee] = useState({Employee_id: 0, First_name: '', Last_name: '', Age:0, Gender: ''});

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === "Employee_id" || name === "Age") {
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }//if this IF Statment runs the code after it skips, because inside the if statment we have a return early, that allow us no longer need the else statment
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: employee.First_name
      })
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData[0])
  }

  const addData = async() => {
    console.log(employee);
    const newData = await fetch('/api02', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Employee: employee
      })
    })
    .then()
    // .then(res => res.json())  //API Result Back  // VM321:1 Uncaught (in promise) SyntaxError: Unexpected end of JSON input  /  at App.js:53:1  /  at async addData (App.js:44:1)
  }

  return (
    <div className="App">
      <input 
        type="number" 
        name="Employee_id" 
        placeholder='Employee_id' 
        onChange={setInput}/>
      <input 
        name="First_name" 
        placeholder='First_name' 
        onChange={setInput}/>
      <input 
        name="Last_name" 
        placeholder='Last_name' 
        onChange={setInput}/>
      <input 
        type="number" 
        name="Age" 
        placeholder='Age' 
        onChange={setInput}/>
      <input 
        name="Gender" 
        placeholder='Gender' 
        onChange={setInput}/>
      <span id='btn'><button onClick={() => fetchData()}> Fetch Employee</button>
      <button onClick={() => addData()}> Create Employee</button></span>
      <p>EmployeeID : {returnedData.Employee_id}</p>
      <p>First Name : {returnedData.First_name}</p>
      <p>Last Name :  {returnedData.Last_name}</p>
      <p>Age :        {returnedData.Age}</p>
      <p>Gender :     {returnedData.Gender}</p>
    </div>
  );
}

export default App;

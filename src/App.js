import './App.css';
import React, {useState, /*useEffect*/} from 'react';

function App() {
  const [returnedData, setReturnedData] = useState(['helloo']);
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age:0, Gender: ''});

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === "EmployeeID" || name === "Age") {
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
        name: employee.Firstname
      })
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <div className="App">
      <input 
        type="number" 
        name="EmployeeID" 
        placeholder='EmployeeID' 
        onChange={setInput}/>
      <input 
        name="Firstname" 
        placeholder='Firstname' 
        onChange={setInput}/>
      <input 
        name="Lastname" 
        placeholder='Lastname' 
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
      <button onClick={() => fetchData()}> Click</button>
      <button onClick={() => fetchData()}> Create</button>
      <p>EmployeeID : {employee.EmployeeID}</p>
      <p>First Name : {employee.Firstname}</p>
      <p>Last Name :  {employee.Lastname}</p>
      <p>Age :        {employee.Age}</p>
      <p>Gender :     {employee.Gender}</p>
    </div>
  );
}

export default App;

import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [returnedData, setReturnedData] = useState(['hiii theereee']);
  // useEffect(()=>{
  //   getData();
  //   console.log('ggg')
  // })
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData.result)
  }
  getData();
  return (
    <div className="App">
      <button onClick={() => getData('/quit')}> Click</button>
      {returnedData}
    </div>
  );
}

export default App;

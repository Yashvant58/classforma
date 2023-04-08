import "./App.css"
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=1&limit=5');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData(); 
  }, []);

  return (
    <div>
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Input Type</th>
              <th>Created at</th>
              </tr>

      {data.map((item,id) =>{
        return(
        <tr key={id}>
              <td>{item.name}</td>
              <td>{item.input_type}</td>
              <td>{item.createdAt}</td>
        </tr>
      )})}
        </table>
    </div>
  );
}

export default App;



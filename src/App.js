import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React, { useEffect, useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://clockints.azurewebsites.net/api/employee/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(`=== ${JSON.stringify(data)}`);
        
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Employee List</h1>
      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <ul>
          {employees.map((emp, index) => (
            <li key={index}>
              {emp.id}  – {emp.user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

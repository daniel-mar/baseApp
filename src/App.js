import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';

function App() {

  // end with []
  useEffect( () => {
    axios.get('http://localhost:8000/api/users')
      .then(res => {
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    
    <div className='App'>
      <h1>Users Application</h1>
    </div>

  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Users from './Users';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/users')
      .then(r => r.json())
      .then(data => {
        setUsers(data)
      })
  }, [])

  return (
    <div className="App">
      <Users users_data = {users}/>
    </div>
  );
}

export default App;

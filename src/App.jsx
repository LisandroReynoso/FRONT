import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([{username: 'lisandro'}])

  useEffect(()=>{
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.payload))
  }, [])
  
  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {users.map((user, i) => <li key={i}>{user.username}</li>)}
      </ul>
    </>
  )
}

export default App

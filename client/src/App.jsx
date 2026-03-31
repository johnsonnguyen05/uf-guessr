import React, { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState("Checking...");
  const server = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

  useEffect(() => {
    fetch(`${server}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Server down"));
  })

  return (
    <div>
      <h1>Server health</h1>
      <p>{status}</p>
    </div>
  )
}

export default App

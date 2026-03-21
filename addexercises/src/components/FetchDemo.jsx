import { useState } from "react";

export default function FetchDemo() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <>
      <h3>Fetch API</h3>
      <button onClick={fetchUsers}>Fetch</button>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </>
  );
}

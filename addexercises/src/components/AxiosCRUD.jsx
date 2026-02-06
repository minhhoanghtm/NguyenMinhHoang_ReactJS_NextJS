import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:3001/users";

export default function AxiosCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get(URL).then(res => setUsers(res.data));
  }, []);

  const addUser = async () => {
    await axios.post(URL, { name });
    setName("");
  };

  const deleteUser = async (id) => {
    await axios.delete(`${URL}/${id}`);
  };

  return (
    <>
      <h3>Axios CRUD</h3>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <button onClick={addUser}>Add</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name}
            <button onClick={() => deleteUser(u.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [users, setUsers] = useState([]); //rỗng
  const [loading, setLoading] = useState(true); //luôn đúng
  useEffect(() => {
    fetch("http://localhost:3001/users") //call API
      .then(res => res.json())
      .then(data => {
        setUsers(data); //gọi thành công
        setLoading(false); //sau khi gọi xong 
      })
      .catch(err => { //gọi thất bại
        console.log(err);
        setLoading(false); //sai
      })
  }, []);

  if (loading) return <p>Đang tải...</p>;

  return (
  <>
  <h1>UseEffect Demo</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </>);
}

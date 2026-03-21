import { useState } from 'react'
import './App.css'
function App() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [user, setUser] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...user, { ...formData, id: Date.now() }]);
    setformData({ name: '', email: '', age: '' })
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Nhap du lieu</h1>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input type="text" name='name' value={formData.name} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="email" name='email' value={formData.email} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <input type="number" name='age' value={formData.age} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type='submit'>Them</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className='result'>
          <h1>Danh sach</h1>
          <table>
            <thead>
              <tr>
                <td>STT</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
              </tr>
            </thead>
            <tbody>
              {user.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App

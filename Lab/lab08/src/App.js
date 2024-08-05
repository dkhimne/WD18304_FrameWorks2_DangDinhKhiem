import './App.css';
import { useEffect, useState } from 'react';
import { analytics } from './firebase-config';
import { addDoc, collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editingId, setEditingId] = useState(null);

  const usersCollectionRef = collection(analytics, 'users');

  const fetchUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const createUser = async (event) => {
    event.preventDefault();
    if (editingId) {
      const userDoc = doc(analytics, 'users', editingId);
      await updateDoc(userDoc, { name, age: Number(age) });
      setEditingId(null);
    } else {
      await addDoc(usersCollectionRef, { name, age: Number(age) });
    }
    fetchUsers();
    setName('');
    setAge('');
  };

  const deleteUser = async (id) => {
    const userDoc = doc(analytics, 'users', id);
    await deleteDoc(userDoc);
    fetchUsers();
  };

  const EditUser = (user) => {
    setName(user.name);
    setAge(user.age);
    setEditingId(user.id);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <form className='row' onSubmit={createUser}>
          <div className='col-6 mt-3'>
            <label className='label-control'>Name:</label>
            <input
              className='form-control'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className='col-6 mt-3'>
            <label className='label-control'>Age:</label>
            <input
              className='form-control'
              type="number"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <div className='col-12 mt-3'>
            <button type="submit" className="btn btn-outline-success">
              {editingId ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
        <div className='mt-5'>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className='btn btn-outline-warning me-2'
                      onClick={() => EditUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className='btn btn-outline-danger'
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

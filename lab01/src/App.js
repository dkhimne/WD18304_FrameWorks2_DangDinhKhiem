import React, { useState } from 'react';
import './App.css';

function App() {
  const [email] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const handleTime = async (e) => {
    e.preventDefault();
    const now = new Date().toLocaleTimeString();
    setCurrentTime(now);
  }

  return (
    <div className="App">
      <div className="container">
        <form className='form-control' onSubmit={handleTime}>
          <div className='mb-3 input-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Search ...'
            />
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              className='form-control'
              placeholder='Vui lòng nhập ...'
              value={email}
            />
          </div>
          <div className='mb-3'>
            <button className='btn btn-info' type="submit">Click Me</button>
          </div>
        </form>
        <div className="mb-3 py-3">
          <h3>Thời gian hiện tại ~ {currentTime}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;

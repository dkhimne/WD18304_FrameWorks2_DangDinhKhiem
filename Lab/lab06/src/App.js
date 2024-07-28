import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link } from 'react-router-dom'

import StreamCreate from './Component/StreamCreate/StreamCreate';
import StreamList from './Component/StreamList/StreamList';
import StreamUpdate from './Component/StreamUpdate/StreamUpdate';
import StreamShow from './Component/StreamShow/StreamShow';
import StreamDestroy from './Component/StreamDestroy/StreamDestroy';
import GoogleAuth from './GoogleAuth';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">KhyM</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/component/streamcreate">StreamCreate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/component/streamshow">StreamShow</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/component/streamupdate">StreamUpdate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/component/streamdestroy">StreamDestroy</Link>
              </li>
            </ul>
            <div className='d-flex'>
              <GoogleAuth/>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/component/streamcreate" element={<StreamCreate />} />
        <Route path="/component/streamupdate" element={<StreamUpdate />} />
        <Route path="/component/streamshow" element={<StreamShow />} />
        <Route path="/component/streamdestroy" element={<StreamDestroy />} />
      </Routes>
    </div>
  );
}

export default App;

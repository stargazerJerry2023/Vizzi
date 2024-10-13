import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Home/Home.jsx';
import Login from '../src/Login/Login_Page.jsx';
import Report from '../src/Report/Report.jsx';
import Navbar from './Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Navbar will still be outside the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Report" element={<Report />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

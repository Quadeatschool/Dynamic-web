import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage';
import SubmitPerk from './SubmitPerk';

function App() {
  return (
    <Router>
      <nav style={{ background: 'var(--nav-background-color)', padding: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/submit">Submit Perk</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmitPerk />} />
      </Routes>
    </Router>
  );
}

export default App;

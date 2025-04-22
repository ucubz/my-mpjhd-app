// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HalamanAwal from './pages/HalamanAwal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HalamanAwal />} />
        {/* Route tambahan nanti: <Route path="/step/1" element={<Step1 />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

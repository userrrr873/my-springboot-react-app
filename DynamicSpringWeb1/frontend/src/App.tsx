import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // մեր նոր ստեղծված Home էջը

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Այստեղ կարող ենք ավելացնել մնացած էջերը հետագայում */}
        </Routes>
      </Router>
  );
};

export default App;

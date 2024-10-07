import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tela1 from './pages/Tela1';
//import Tela2 from './pages/Tela2';
//import Tela3 from './pages/Tela3';
//import Tela4 from './pages/Tela4';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Tela1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './styles/global.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

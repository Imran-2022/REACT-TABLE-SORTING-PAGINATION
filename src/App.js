import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import SingleData from './components/SingleData/SingleData';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Home />} />
      <Route path="/users/:id" element={<SingleData />} />
    </Routes>
  );
}

export default App;

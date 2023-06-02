import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/List';
import ShowDetails from './components/Details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShowList/>} />
        <Route path="/shows/:showId" element={<ShowDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;

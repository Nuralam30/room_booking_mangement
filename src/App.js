import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/book' element={<Book></Book>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

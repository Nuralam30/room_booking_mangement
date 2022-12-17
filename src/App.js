import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import RoomDetails from './components/Book/RoomDetails/RoomDetails';
import Navbar from './components/Navbar/Navbar';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <h4>Email: {loggedInUser.email}</h4>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/book' element={<Book></Book>}></Route>
          <Route path='/room-details/:roomName' element={<PrivateRoute redirectTo='/login'><RoomDetails></RoomDetails></PrivateRoute>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="*" element={<Home></Home>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import React, { createContext, useState, useNavigate, useLocation } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { history } from '_helpers';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute';
import RoomDetails from './components/Book/RoomDetails/RoomDetails';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h4>Name: {loggedInUser.name}</h4>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/book' element={<Book></Book>}></Route>
          <Route path='/room-details' element={<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="*" element={<Home></Home>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

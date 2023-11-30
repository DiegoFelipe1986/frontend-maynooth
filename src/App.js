import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Products from './components/Products';


const isAuthenticated = !!localStorage.getItem('authToken');

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {isAuthenticated ? (<Route exact path='/products' element={<Products/>}/>) : <Route path="/" element={<Home />} />}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;

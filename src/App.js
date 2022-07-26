import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<h1>home</h1>} />
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="Signup" element={<h1>Signup</h1>} />
        <Route path="Cart" element={<h1>Cart</h1>} />
        <Route path="Orders" element={<h1>Orders</h1>} />
        <Route path="Profile" element={<h1>Profile</h1>} />
        <Route path="Errorpage" element={<h1>Errorpage</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header>
      <Link to="/">home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/Orders">Orders</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Errorpage">Errorpage</Link>
    </header>
  );
}

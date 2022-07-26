import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      
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

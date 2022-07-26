import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="*" element={<Errorpage />} />
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

const Home = () => <div>Home</div>;
const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;
const Cart = () => <div>Cart</div>;
const Orders = () => <div>Orders</div>;
const Profile = () => <div>Profile</div>;
const Errorpage = () => <div>Errorpage</div>;

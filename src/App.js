import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Product/:pid" element={<Product />} />
        <Route path="admin/*">
          <Route path="Users" element={<h1>admin-users</h1>} />
          <Route path="Products" element={<h1>admin-Products</h1>} />
          <Route path="Inventory" element={<h1>admin-Inventory</h1>} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    let pageName = e.target.innerHTML; // Login
    let fullPath = '/' + pageName; // /Login
    navigate(fullPath);
  };
  return (
    <header>
      <Link to="/">home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/Orders">Orders</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Product/1">Product-1</Link>
      <Link to="/Product/2">Product-2</Link>
      <Link to="/Product/3">Product-3</Link>
      <Link to="/Product/4">Product-4</Link>
      <Link to="/Product/5">Product-5</Link>

      <button onClick={handleClick}>home</button>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleClick}>Signup</button>
      <button onClick={handleClick}>Cart</button>
      <button onClick={handleClick}>Orders</button>
      <button onClick={handleClick}>Profile</button>
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
const Product = () => {
  const params = useParams();
  // console.log(useParams());
  return <div>Product-{params.pid}</div>;
};

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MyAccount.css';
 
const MyAccount = () => {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });
 
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  return (
    <div className="container my-account">
      <h1 className="my-4 text-center">My Account</h1>
      <form className="account-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" value={user.phone} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={user.address} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};
 
export default MyAccount;
 
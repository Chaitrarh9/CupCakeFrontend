import React, { useState, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/login.css";

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    fetch('http://localhost:5000/user/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          navigate('/');
        }
      })
      .catch(error => {
        setError('An error occurred. Please try again.', error);
      });
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }

  
  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className="col-md-6">
          <div className="authenticateBox">
            <h4 className="text-center">Login</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" name="email" value={email} onChange={handleEmail} required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" name="password" onChange={handlePassword} required />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" className="btn btn-pink btn-block mt-3">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Create Account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};


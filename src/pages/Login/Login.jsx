import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can add login logic here
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Login</h2>
        <form >
          <input
            type="text"
            name="usernameOrEmail"
            placeholder="Email/Username"
            value={formData.usernameOrEmail}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

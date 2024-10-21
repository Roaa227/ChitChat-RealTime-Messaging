import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import useSignup from "../../hooks/useSignup";

export const Signup = () => {

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });


  const { loading, signup } = useSignup();
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData, setErrors);
    
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
          />
          {errors.userName && <p style={{margin:'0%', color:'#e5de00', fontWeight:'bold' }}>{errors.userName}</p>}
          {/* <p >test test</p> */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <div style={{margin:'0%'}}>
          {errors.email && <p style={{margin:'0%', color:'#e5de00', fontWeight:'bold' }}>{errors.email}</p>}
          {/* <p style={{margin:'0%', color:'#e5de00', fontWeight:'bold' }}>test test</p> */}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{margin:'0%', color:'#e5de00', fontWeight:'bold' }}>{errors.password}</p>}
          {/* <p style={{margin:'0%', color:'#e5de00', fontWeight:'bold' }}>test test</p> */}

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

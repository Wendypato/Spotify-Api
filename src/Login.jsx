import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({
    firstName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="login-wrapper">
      <div className="form-container">
        <h1>Holla, Welcome Back</h1>
        <p>Hey, welcome back to your special place</p>

        <div className = "form-group">
          <label>
            First Name
            <input
              type='text'
              name='firstName'
              onChange={handleChange}
              value={form.firstName}
            />
          </label>
        
          <label>
            Password
            <input
              type='password'
              name='password'
              onChange={handleChange}
              value={form.password}
            />
            <div className = "options-row">
              <label className = "remember">
                <input
                type = 'checkbox'
                />
                Remember me
              </label>
              <a href = "#" className = "forgot-password">Forgot Password?</a>
            </div>
          </label>

        </div>
       

        <button className = "button">Sign In</button>
      </div>

      <div className="image-container">
        <img src="/undraw_happy-music_na4p.svg" alt="Login illustration" />
      </div>
    </div>
  );
};

export default Login;



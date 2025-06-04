import React, { useState } from 'react';
import './Login.css';
import { spotifyAPI } from './api/spotifyAPI';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (e) => {
  e.preventDefault();
  const url = 'http://localhost:3000/api/users/login';
  const data = JSON.stringify({
    email: form.email,
    password: form.password
  });
  const res = await spotifyAPI(url, 'POST', data, null);

  if (res && res.user && res.user.id){
    localStorage.setItem('user_id', res.user.id);
    alert('Login exitoso');
    window.location.href = "/dashboard";
  } else {
    alert('Usuario o contraseña incorrectos');
    console.error('Login failed');
  }
};





  return (
    <div className="login-wrapper">
      <div className="form-container">
        <h1>Hola, Bienvenido de vuelta!!</h1>
        <p>Escucha tus cumbias favoritas</p>

        <div className="form-group">
          <label>
            Email
            <input
              type='email'
              name='email'
              onChange={handleChange}
              value={form.email}
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
            <div className="options-row">
              <label className="remember">
                <input type='checkbox' />
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
          </label>
        </div>

        <button type="button" onClick={handleLogin} className="button">
          Sign In
        </button>
      </div>

      <div className="image-container">
        <img src="/undraw_happy-music_na4p.svg" alt="Login illustration" />
      </div>
    </div>
  );
};

export default Login;



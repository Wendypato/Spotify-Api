import React, { useState } from 'react';
import { spotifyAPI } from './api/spotifyAPI';
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: '',      // ← este es el campo correcto
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users";
    const data = JSON.stringify(form);
    const res = await spotifyAPI(url, "POST", data, null);
    console.log(res);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="form-container">
          <h1>Register</h1>
          <p>Crea tu cuenta y escucha unos cumbiones</p>

          <div className="form-group">
            <label>
              Name
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
              />
            </label>
          </div>

          <button className="button-reg" type="button" onClick={handleRegistro}>
            Registrar
          </button>
        </div>

        <div className="image-container">
          <img src="/undraw_happy-music_na4p.svg" alt="Register illustration" />
        </div>
      </div>
    </>
  );
};

export default Register;
  

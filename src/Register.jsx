import React, { useState } from 'react';
import { spotifyAPI } from './api/spotifyAPI';
import "./App.css"
// import register from "./assets/"
const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    // lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newForm = {
      ...form,
      [name]: value,
    };

    setForm(newForm);
  };

  const handleRegistro = async() => {
    const url = "http://localhost:3000/api/users/post";
    console.log(form);
    const data = JSON.stringify(form);
    console.log(data)
    const res = await spotifyAPI(url, "POST",data, null)
    console.log(res);
  }

  return (
    <>
      <div>Register</div>
      <div style={{ display: 'flex' }}>
        <form action="" className='form'>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={form.name}
            />
          </label>
           <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={form.name}
            />
          </label>

          <button onClick={handleRegistro}>Registrar</button>
        </div>
        </form>
      </div>
    </>
  );
};

export default Register;
  

import './App.css';
import React, { useEffect } from 'react';
import { getToken } from './getToken';
import { useNavigate } from "react-router-dom";

import { authFlow, getDataAuth } from './setup';
import { spotifyAPI } from './api/spotifyAPI';

function App() {

  const navigate = useNavigate();
  const handleSetup = async() => {
    const code = await getDataAuth();
    authFlow(code)
  }


  const handleGetToken = () => {
      getToken();
      navigate('/dashboard')
  }
  const getUsers = async() => {
    const url = "http://localhost:3000/api/users";
    const res = await spotifyAPI(url, 'GET', null, null);
    console.log(res);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
    <div className = "header">
      <img src="/LogoSpotify.png" alt="Logo de Spotify" className = "spotify-logo-inicio" />
      <h1>Spotify</h1>
    </div>
    <div className = "app-container">
      <h1>Bienvenido</h1>
      <button className = "btn-app-container" onClick={handleSetup}>Star Setup </button>
      <button className = "btn-app-container"onClick={handleGetToken}>Get Token </button>
    </div>
    </>
  );
}

export default App;

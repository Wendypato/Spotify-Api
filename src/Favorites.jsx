import React, { useEffect, useState } from "react";
import { spotifyAPI } from "./api/spotifyAPI";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = 2;

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userId) return;

      try {
        const url = `http://localhost:3000/api/users/${userId}/favorites`;
        


        const data = await spotifyAPI(url, "GET", null, null);
        setFavorites(data || []);
        console.log("Datos recibidos del backend:",data);
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    fetchFavorites();
  }, [userId]);

  const handleDeleteFavorite = async (songId) => {
    try {
      const url = `http://localhost:3000/api/users/${userId}/favorites/${songId}`;
      await spotifyAPI(url, "DELETE", null, null);
      setFavorites((prev) => prev.filter((fav) => fav.id !== songId));
    } catch (error) {
      console.error("Error deleting favorite", error);
    }
  };

  if (!userId) {
    return <p>Debes iniciar sesión para ver tus favoritos</p>;
  }

  return (
    <div className="favorites-container">
      <h2>Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Aun no tienes agregado favoritos</p>
      ) : (
        favorites.map((fav) => (
            
          <div key={fav.id} style={{ marginBottom: "20px" }}>
            {fav.album?.images?.[0]?.url && (
              <img src={fav.album.images[0].url} alt={fav.name} width={150} />
            )}
            <p>{fav.artists?.map((a) => a.name).join(", ")}</p>
            <button className="button" onClick={() => handleDeleteFavorite(fav.id)}>
              
              Delete favorito
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;

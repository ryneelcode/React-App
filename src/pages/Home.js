import React, { useState } from "react";
import { useLocation } from "wouter";
import { useGifs } from "../hooks/useGifs";
import GifList from "../components/GifList/Giflist";

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation(); //eslint-disable-line
  const { gifs } = useGifs();

  const handleOnSubmit = e => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  }
  const handleSetKeyWord = e => {
    setKeyword(e.target.value);
  }

  return (
    <div className="home-page">
      <h1>Busca GIFS</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="keyword" placeholder="Search here any gif..." onChange={handleSetKeyWord} />
      </form>
      <h2>Tú ultima busqueda...</h2>
      <GifList gifs={gifs} />
    </div>
  )
}
export default Home;
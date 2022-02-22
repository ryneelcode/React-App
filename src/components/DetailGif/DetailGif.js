import React from "react";
import { useGifs } from "../../hooks/useGifs"
import Gif from "../Gif/Gif";

const DetailGif = ({ params }) => {
  const { gifs } = useGifs();
  const result = gifs.find(gif => gif.id === params.id)
  return (
    <div>
      <h2>Pagina descripcion</h2>
      <Gif {...result} />
    </div>
  )
}

export default DetailGif;
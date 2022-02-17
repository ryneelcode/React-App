import React from "react";
import Gif from "../Gif/Gif"

function GifList({ gifs }) {

  return <div className="list-gifs">
    {
      gifs.map(({ id, title, url }) =>
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />)
    }
  </div>
}
export default GifList;
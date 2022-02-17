import React from "react";

const DetailGif = ({ params }) => {
  return (
    <div className="detail-gif">
      <h1>{params.id} esta es la id del componente</h1>
    </div>
  )
}

export default DetailGif;
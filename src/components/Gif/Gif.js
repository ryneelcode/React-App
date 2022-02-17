import React from "react";
import { Link } from "wouter";
import './Gif.css'

const Gif = ({ id, title, url }) => {
  return <Link className="gif" to={`/gif/${id}`}>
    <h4>{title}</h4>
    <small>{id}</small>
    <img src={url} alt={title} />
  </Link>
}

export default Gif;
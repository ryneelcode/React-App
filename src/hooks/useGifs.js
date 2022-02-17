import { useState, useEffect } from "react"
import getGifs from "../services/getGifs"

const useGifs = (keyword) => {
  const keywordToUse = keyword === undefined ? "random" : keyword
  const [gifs, updateGifs] = useState([]);

  console.log(keyword)
  useEffect(() => {
    getGifs(keywordToUse)
      .then(gifs => updateGifs(gifs))
  }, [keywordToUse]);

  return { gifs }
}

export { useGifs }
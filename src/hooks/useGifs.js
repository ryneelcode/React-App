import { useEffect, useContext } from "react"
import getGifs from "../services/getGifs"
import GifContext from "../context/GifContext";

const useGifs = (keyword) => {
  const { gifs, updateGifs } = useContext(GifContext);
  const keywordToUse = keyword || localStorage.getItem('gifKeyword') || 'random'

  useEffect(() => {
    getGifs({ keyword: keywordToUse })
      .then(gifs => updateGifs(gifs))
    localStorage.setItem('gifKeyword', keywordToUse)
  }, [keywordToUse, updateGifs]);

  return { gifs }
}

export { useGifs }
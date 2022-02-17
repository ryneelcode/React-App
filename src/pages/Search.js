import GifList from "../components/GifList/Giflist"
import { useGifs } from "../hooks/useGifs";

const SearchGifs = ({ params }) => {
  const { keyword } = params;
  const { gifs } = useGifs(keyword);
  return <>
    <GifList gifs={gifs} />
  </>

}

export default SearchGifs; 
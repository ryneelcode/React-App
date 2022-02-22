import React, { useState } from "react";

const GifContext = React.createContext({});

export function GifContextProvider({ children }) {
  const [gifs, updateGifs] = useState([]);

  return <GifContext.Provider value={{ gifs, updateGifs }}>
    {children}
  </GifContext.Provider>
}

export default GifContext;
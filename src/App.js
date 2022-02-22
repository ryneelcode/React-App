import React from 'react'
import { Route } from 'wouter';
import Home from "./pages/Home";
import Search from './pages/Search';
import DetailGifs from './components/DetailGif/DetailGif';
import { GifContextProvider } from "./context/GifContext"

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GifContextProvider>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={Search} />
          <Route path='/gif/:id' component={DetailGifs} />
        </GifContextProvider>
      </section>
    </div>
  );
}

export default App;

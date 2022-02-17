import React from 'react'
import { Route } from 'wouter';
import Home from "./pages/Home";
import Search from './pages/Search';
import Detail from './pages/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={Search} />
        <Route path='/gif/:id' component={Detail} />
      </section>
    </div>
  );
}

export default App;

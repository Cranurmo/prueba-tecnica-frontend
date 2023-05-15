import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import AddMovie from "./pages/AddMovie";



const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addMovie">Agregar Pelicula</Link>
        </li>
      </ul>
    </nav>
  )
}

const App = () => {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addMovie" element={<AddMovie />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

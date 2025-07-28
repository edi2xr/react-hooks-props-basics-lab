// src/components/App.js
import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar"; // ✅ add this import
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar /> {/* ✅ add this line */}
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;

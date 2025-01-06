import Navbar  from "./pages/Navbar.jsx";
import { Outlet } from "react-router-dom";
import React from "react";
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App

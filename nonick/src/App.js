import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

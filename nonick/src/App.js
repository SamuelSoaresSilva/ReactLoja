import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Form from "./components/form/Form";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form />
      </div>
    </BrowserRouter>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Ruta1/Home";
import Formulario from "./components/Ruta2/Formulario";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
      <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Formulario" element={<Formulario />} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;

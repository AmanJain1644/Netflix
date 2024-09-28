import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import Browse from "./Components/Browse";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element=<Login/> />
      <Route path="/browse" element=<Browse/> />
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App


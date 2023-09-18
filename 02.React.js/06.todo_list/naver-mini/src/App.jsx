import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import { Route, Routes } from 'react-router-dom'
import ImageResult from "./components/ImageResult";
import Index from "./components/Index";
function App() {

  return(
  <div className="app">
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/search" element={<ImageResult />} />
    </Routes>
  </div>
  )
}

export default App;

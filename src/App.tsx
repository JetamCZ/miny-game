import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./screens/Welcome";
import Game from "./screens/Game";
import Joke from "./screens/Joke";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome/>}/>
        <Route path="/game/:id" element={<Game/>}/>
        <Route path="/joke" element={<Joke/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

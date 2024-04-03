import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shimano from "./components/Shimano.jsx";

const PAGES = 5;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Shimano />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

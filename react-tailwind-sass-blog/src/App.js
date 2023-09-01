import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return ( 
      <Routes>
          <Route path="/" exact element={<HomeContainer />} />
      </Routes>
  );
}

export default App;
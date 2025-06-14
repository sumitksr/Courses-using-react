import { useEffect, useState } from "react";
import Navbar from "./compo/Navbar";
import Filter from "./compo/Filter.tsx";
import Cards from "./compo/Cards";
import React from "react";
import {apiUrl,filterData} from "./data";
import "./App.css";

function App() {
  return (
    <div> 
      <Navbar></Navbar>
      <Filter
        filterData={filterData}
        apiUrl={apiUrl}
      ></Filter>
      <Cards></Cards>
    </div>
  );
}

export default App;

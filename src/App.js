import { useEffect, useState } from "react";
import styles from "./css_module/App.module.css"
import Home from "./route/Home.js"
import Details from "./route/Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  return <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Details/>}/>
      </Routes>
  </Router>
}

export default App;

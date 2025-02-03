import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";

import "./ i18n.js"; 
import { useTranslation } from "react-i18next";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App

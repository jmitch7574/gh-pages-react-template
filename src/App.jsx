import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Header from './components/header.jsx'
import Footer from "./components/footer.jsx";
import Home from './pages/home'

function App() {
  const [pageTitle, setPageTitle] = useState("Home");

  return (
    <HashRouter>
      <Header title={pageTitle} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home setTitle={setPageTitle} />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import About from './components/About'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <header>
          <h1>CobaCerdas</h1>
          <nav>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/quiz">Quiz</Link></li>
              <li><Link to="/about">Tentang</Link></li>
            </ul>
          </nav>
          <button onClick={toggleDarkMode} className="toggle-btn">
            {darkMode ? 'Light Mode' : 'Night Mode'}
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
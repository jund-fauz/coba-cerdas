import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import About from './components/About'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>CobaCerdas</h1>
          <nav>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/quiz">Quiz</Link></li>
              <li><Link to="/about">Tentang</Link></li>
            </ul>
          </nav>
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
import './utils/style/app.scss'

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Organisms/header'
import Home from './pages/home'
import Cv from './pages/cv'
import PageNotFound from './pages/pageNotFound'
import { PostProvider } from './utils/contexts/portfolioContext'

function App() {
  return (
    <React.StrictMode>
      <div className="container">
        <Router>
          <PostProvider>
            <Header />
            <div className="main">
              <div className="main__content">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/cv" element={<Cv />} />
                  <Route path="*" element={<PageNotFound />} />
                  <Route path="/error" element={<PageNotFound />} />
                </Routes>
              </div>
            </div>
          </PostProvider>
        </Router>
      </div>
    </React.StrictMode>
  )
}

export default App

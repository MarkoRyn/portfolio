import './utils/style/app.scss'

import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Organisms/header'
import Footer from './components/Organisms/footer'
import Home from './pages/home'
import PageNotFound from './pages/pageNotFound'
import Test from './pages/test'

import { PortfolioProvider } from './utils/contexts/portfolioContext'

function App() {
  return (
    <React.StrictMode>
      <div className="container">
        <Router>
          <PortfolioProvider>
            <Header />
            <div className="main">
              <div className="main__content">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/portfolio" element={<Home />} />
                  <Route path="*" element={<PageNotFound />} />
                  <Route path="/error" element={<PageNotFound />} />
                  <Route path="/test" element={<Test />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </PortfolioProvider>
        </Router>
      </div>
    </React.StrictMode>
  )
}

export default App

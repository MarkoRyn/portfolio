import './utils/style/app.scss'

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Organisms/header'
import Home from './pages/home'
import Login from './pages/login'
import CreateCv from './pages/createCv'
import Cv from './pages/cv'
import Profile from './pages/profile'
import PageNotFound from './pages/pageNotFound'
import { PostProvider } from './utils/contexts/portfolioContext'

function App() {
  return (
    <React.StrictMode>
      <div className="container">
        <Router>
          <PostProvider>
            <Header />
            <main className="main">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createPost" element={<CreateCv />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/error" element={<PageNotFound />} />
              </Routes>
            </main>
          </PostProvider>
        </Router>
      </div>
    </React.StrictMode>
  )
}

export default App

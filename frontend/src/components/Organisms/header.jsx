import '../../utils/style/header.scss'

import { Link } from 'react-router-dom'

import React, { useContext } from 'react'

import { PortfolioContext } from '../../utils/contexts/portfolioContext'

export default function Header() {
  const {
    setColShow,
    setColDelay,
    setCategoryText,
    categoryText,
    setResetScreen,
    resetScreen,
  } = useContext(PortfolioContext)

  const handleCvClick = () => {
    setColDelay('cv')
    setTimeout(() => {
      setColShow('cv')
    }, 300)
  }

  const handleIdClick = () => {
    if (categoryText !== 'identity') {
      setResetScreen(!resetScreen)
      setCategoryText('identity')
    }
    setColDelay('identity')
    setTimeout(() => {
      setColShow('identity')
    }, 300)
  }

  const handleTestClick = () => {}
  return (
    <>
      <header className="header ">
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
          <div className="header__title">Développeur Web</div>
        </Link>
        <nav className="header__nav">
          <div className="header__nav__btn">
            <button onClick={handleCvClick}>CV</button>
            <button onClick={handleIdClick}>Identité</button>
            <Link to="/test">
              <button onClick={handleTestClick}>GearWheels</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

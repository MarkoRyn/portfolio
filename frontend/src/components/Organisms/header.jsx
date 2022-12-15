import '../../utils/style/header.scss'

import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import UserService from '../../api/Services/UserServices'
import { PortfolioContext } from '../../utils/contexts/portfolioContext'

import Logout from './logout'
import {} from '../Atoms/svg'

export default function Header() {
  const { userId } = useContext(PortfolioContext)
  const userServices = new UserService()
  const navigate = useNavigate()

  const [isConfirm, setIsConfirm] = useState(false)
  const [scrollUp, setScrollUp] = useState('')
  const [scrollDown, setScrollDown] = useState('')

  const handleLogoutCancel = (e) => {
    e.preventDefault()
    setIsConfirm(false)
    navigate('/', { replace: true })
  }

  const handleLogoutConfirm = async (e) => {
    e.preventDefault()
    localStorage.clear()
    setIsConfirm('')
    // window.location.reload()
    await userServices.logoutUser()
  }

  // to set class scrollUp and scrollDown to header section
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 70) {
        setScrollUp('scrollUp')
        setScrollDown('')
      } else {
        setScrollUp('')
        setScrollDown('scrollDown')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollUp])

  // to scroll to top
  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <header className={'header ' + scrollUp + scrollDown}>
        <Link
          style={{ textDecoration: 'none', color: 'white' }}
          to="/portfolio"
        >
          <div className="header__title" onClick={handleScrollTop}>
            MARCEL RAYANE
          </div>
        </Link>
        <div className="header__nav">
          {/* <Link style={{ textDecoration: 'none', color: 'white' }} to="/cv">
            <div className="header__nav__cv">CURRICULUM VITAE</div>
          </Link> */}
          {/* <Link style={{textDecoration: 'none'}} to="/profile">
            <div className="header__nav__profile">PROFILE</div>
          </Link> */}
          {/* <Link style={{textDecoration: 'none'}} to="/login">
            <div className="header__nav__login">LOGIN</div>
          </Link>
          <Logout
            name="logout"
            className="header__nav__logout"
            isConfirm={isConfirm}
            onClick={() => setIsConfirm(true)}
            handleCancel={handleLogoutCancel}
            handleConfirm={handleLogoutConfirm}
          /> */}
          {!userId ? <></> : <></>}
        </div>
      </header>
    </>
  )
}

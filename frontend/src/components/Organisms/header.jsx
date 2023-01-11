import '../../utils/style/header.scss'

import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import UserService from '../../api/Services/UserServices'

export default function Header() {
  const userServices = new UserService()
  const navigate = useNavigate()

  return (
    <>
      <header className="header ">
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
          <div className="header__name">Marcel Rayane</div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
          <div className="header__function">Développeur Web</div>
        </Link>
      </header>
    </>
  )
}

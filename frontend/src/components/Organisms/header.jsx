import '../../utils/style/header.scss'

import { Link } from 'react-router-dom'
import React from 'react'

import { Fans } from '../Molecules/fans'

export default function Header() {
  return (
    <>
      <header className="header ">
        <Fans />
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
          <div className="header__title">Tisserand numérique</div>
        </Link>
        <Fans />
      </header>
    </>
  )
}

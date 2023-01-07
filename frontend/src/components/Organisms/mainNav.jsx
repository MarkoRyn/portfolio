import '../../utils/style/main.scss'

import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import UserService from '../../api/Services/UserServices'
import { PortfolioContext } from '../../utils/contexts/portfolioContext'

import {} from '../Atoms/svg'

export default function MainNav() {
  const { userId } = useContext(PortfolioContext)
  const userServices = new UserService()
  const navigate = useNavigate()

  return (
    <>
      <div className="main__nav">
        <div className="">EXPERIENCES</div>
        <div className="">FORMATIONS</div>
        <div className="">COMPETENCES</div>
        <div className="">LANGUES</div>
      </div>
    </>
  )
}

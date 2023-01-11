import React, { useState, useContext } from 'react'
import { useEffect } from 'react'

import { PortfolioContext } from '../../utils/contexts/portfolioContext'

export default function Invert({ children, elementClass, category }) {
  const { isCv, setIsCv } = useContext(PortfolioContext)

  return (
    <div className={elementClass} id={category}>
      {children}
    </div>
  )
}

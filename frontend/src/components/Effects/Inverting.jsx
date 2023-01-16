import React, { useState, useContext, useEffect } from 'react'

import { PortfolioContext } from '../../utils/contexts/portfolioContext'

export const Inverting = ({ children, elementClass, category }) => {
  const { leftColShow, leftColDelay } = useContext(PortfolioContext)

  const [className, setClassName] = useState()

  useEffect(() => {
    const currentCategory = document.getElementById(`${category}`)
    currentCategory
      ? console.log(currentCategory)
      : console.log("category element don't exist")
  }, [category])

  useEffect(() => {
    leftColDelay !== category ? setClassName('moveBack') : setClassName('')
    setTimeout(() => {
      leftColShow === category ? setClassName('moveForward') : setClassName('')
    }, 300)
  }, [leftColDelay, category, leftColShow])

  console.log(leftColDelay)
  console.log(leftColShow)

  return (
    <div className={`${elementClass} ${className}`} id={category}>
      {children}
    </div>
  )
}

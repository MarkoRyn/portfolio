import React, { useState, useContext, useEffect } from 'react'

import { PortfolioContext } from '../../utils/contexts/portfolioContext'

export default function Invert({ children, elementClass, category }) {
  const { leftColShow, leftColDelay } = useContext(PortfolioContext)

  const [className, setClassName] = useState()

  useEffect(() => {
    const currentCategory = document.getElementById(`${category}`)
    currentCategory
      ? console.log(currentCategory)
      : console.log("category element don't exist")
  }, [category])

  useEffect(() => {
    leftColDelay !== category
      ? setClassName('moveBack')
      : setClassName('moveForward')
    setTimeout(() => {
      leftColShow === category
        ? setClassName('moveForward')
        : setClassName('moveBack')
    }, 500)
  }, [leftColDelay, category, leftColShow])

  console.log(leftColDelay)
  console.log(leftColShow)

  return (
    <div className={`${elementClass} ${className}`} id={category}>
      {children}
    </div>
  )
}

import React, { useState, useEffect } from 'react'

export const Inverting = ({
  children,
  elementClass,
  category,
  show,
  delay,
}) => {
  const [className, setClassName] = useState()

  // useEffect(() => {
  //   const currentCategory = document.getElementById(`${category}`)
  //   currentCategory
  //     ? console.log(currentCategory)
  //     : console.log("category element don't exist")
  // }, [category])

  useEffect(() => {
    delay !== category ? setClassName('moveBack') : setClassName('')
    setTimeout(() => {
      show === category ? setClassName('moveForward') : setClassName('')
    }, 300)
  }, [delay, category, show])

  return (
    <div className={`${elementClass} ${className}`} id={category}>
      {children}
    </div>
  )
}

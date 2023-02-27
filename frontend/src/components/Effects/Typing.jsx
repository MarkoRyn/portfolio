import { useState, useEffect, useContext } from 'react'
import { PortfolioContext } from '../../utils/contexts/portfolioContext'

export const Typing = ({ className, text }) => {
  const { categoryText } = useContext(PortfolioContext)
  const descContent = document.querySelector(`.${className}`)

  useEffect(() => {
    function typeWriter(words, index) {
      const typingId = setTimeout(() => {
        if (index < words.length) {
          if (descContent) {
            descContent.innerHTML += `<span>${words[index]}</span>`
            typeWriter(text, index + 1)
          }
        }
      }, 50)
    }
    setTimeout(() => {
      typeWriter(text, 0)
    }, 60)
  }, [text, descContent])

  return <div className={className}></div>
}

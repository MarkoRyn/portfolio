import { useState, useEffect } from 'react'

export const Typing = ({ className, text }) => {
  const [timer, setTimer] = useState()
  const descContent = document.querySelector(`.${className}`)

  useEffect(() => {
    setTimer(60)
    function typeWriter(words, index) {
      if (index < words.length) {
        setTimeout(() => {
          descContent.innerHTML += `<span>${words[index]}</span>`
          typeWriter(text, index + 1)
        }, 50)
      }
    }
    setTimeout(() => {
      typeWriter(text, 0)
    }, timer)
  }, [text, timer, descContent])

  return <div className={className}></div>
}

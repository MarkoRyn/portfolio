import React, { useEffect } from 'react'

export const Floating = ({ children, elementClass, category }) => {
  function getRandom(min, max) {
    return Math.random() * (max - min) + min
  }

  const containerW = 200
  const containerH = 200

  useEffect(() => {
    const floatRandom = (elementClass) => {
      const floatElement = document.querySelector(elementClass)
      if (floatElement) {
        let elementW = floatElement.offsetWidth
        let elementH = floatElement.offsetHeight
        let elementL = floatElement.offsetLeft
        let elementR = elementL + elementW
        let elementT = floatElement.offsetTop
        let elementB = elementT + elementH

        let y = []
        let x = []
        let z = []
        let brightness = []
        let zIndex = []
        let blur = []
        for (let i = 0; i <= 10; i++) {
          y[i] = getRandom(0 - containerH / 5, containerH)
          x[i] = getRandom(0 - containerW / 3, containerW)
          z[i] = z[i - 1] === 0 ? getRandom(-1000, 0) : 0
          brightness[i] = (z[i] + 1000) / 1000
          zIndex[i] = Math.round(z[i])
          blur[i] = z[i] / -200
          let animationDuration = getRandom(60, 180)
          floatElement.style.setProperty(`--y${i}`, `${y[i]}px`)
          floatElement.style.setProperty(`--x${i}`, `${x[i]}px`)
          floatElement.style.setProperty(`--z${i}`, `translateZ(${z[i]}px)`)
          floatElement.style.setProperty(
            `--brightness${i}`,
            `brightness(${brightness[i]}) blur(${blur[i]}px)`
          )
          floatElement.style.setProperty(`--zIndex${i}`, `${zIndex[i]}`)
          floatElement.style.setProperty(
            `--animation`,
            `floating ${animationDuration}s ease-in-out infinite`
          )
          floatElement.addEventListener('mouseover', () => {
            // playFart.play()
            floatElement.style.setProperty(
              `--brightness${i}`,
              `brightness(1) blur(0)`
            )
          })
          floatElement.addEventListener('mouseout', () => {
            // playFart.pause()
            floatElement.style.setProperty(
              `--brightness${i}`,
              `brightness(${brightness[i]}) blur(${blur[i]}px)`
            )
          })
        }
        let startScale = getRandom(1.5, 2)
        let endScale = getRandom(0.5, 1)
        floatElement.style.setProperty('--startScale', `${startScale}`)
        floatElement.style.setProperty('--endScale', `${endScale}`)
      }
    }

    const floatingSkill = (value) => {
      const skillElement = document.querySelector(`.floating__skill__${value}`)
      if (skillElement) {
        let skillCount = skillElement.childElementCount

        for (let i = 0; i < skillCount; i++) {
          const elementClass = `floating__skill__${value}--${i}`
          if (elementClass) {
            floatRandom(`.${elementClass}`)
          }
        }
      }
    }
    floatingSkill(category)
  }, [category])

  return (
    <div className={`${elementClass}`} id={category}>
      {children}
    </div>
  )
}

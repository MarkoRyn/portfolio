import '../utils/style/home.scss'

import React, { useContext, useEffect } from 'react'
import { Skill } from '../components/Molecules/skill'

import { PortfolioContext } from '../utils/contexts/portfolioContext'

export default function Cv() {
  const { cvData } = useContext(PortfolioContext)

  function getRandom(min, max) {
    return Math.random() * (max - min) + min
  }

  function random(val) {
    return Math.floor(Math.random() * val)
  }

  const screenW = window.innerWidth
  const screenH = window.innerHeight
  console.log(`${screenW}x${screenH} `)

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
        y[i] = getRandom(0 - screenH / 5, screenH)
        x[i] = getRandom(0 - screenW / 3, screenW)
        z[i] = z[i - 1] === 0 ? getRandom(-1000, 0) : 0
        brightness[i] = (z[i] + 1000) / 1000
        zIndex[i] = Math.round(z[i])
        blur[i] = z[i] / -100
        console.log(z[i], blur[i])
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
          floatElement.style.setProperty(
            `--brightness${i}`,
            `brightness(1) blur(0)`
          )
        })
        floatElement.addEventListener('mouseout', () => {
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

  const elementPosition = (elementClass) => {
    const element = document.querySelector(elementClass)
    if (element) {
      let elementWidth = element.offsetWidth
      let elementHeight = element.offsetHeight
      let elementLeft = element.offsetLeft
      let elementRight = elementLeft + elementWidth
      let elementTop = element.offsetTop
      let elementBottom = elementTop + elementHeight
    }
  }

  const getElementPosition = () => {
    const frontSkillElement = document.querySelector('.cv__skill__front')
    if (frontSkillElement) {
      let frontSkillCount = frontSkillElement.childElementCount
      for (let i = 0; i < frontSkillCount; i++) {
        const el = { x: 0, y: 0, w: 200, h: 100 }
        // console.log(el)
        const frontElementClass = `cv__skill__front--${i}`
        if (frontElementClass) {
          floatRandom(`.${frontElementClass}`)
          elementPosition(`.${frontElementClass}`)
        }
      }
    }
  }

  // setInterval(function () {
  //   getElementPosition()
  // }, 5000)

  useEffect(() => {
    const frontSkillElement = document.querySelector('.cv__skill__front')
    if (frontSkillElement) {
      let frontSkillCount = frontSkillElement.childElementCount

      for (let i = 0; i < frontSkillCount; i++) {
        const frontElementClass = `cv__skill__front--${i}`
        if (frontElementClass) {
          floatRandom(`.${frontElementClass}`)
          getElementPosition(`.${frontElementClass}`)
        }
      }
    }
  })

  useEffect(() => {
    const backSkillElement = document.querySelector('.cv__skill__back')
    if (backSkillElement) {
      let backSkillCount = backSkillElement.childElementCount
      for (let i = 0; i < backSkillCount; i++) {
        const backElementClass = `cv__skill__back--${i}`
        if (backElementClass) {
          floatRandom(`.${backElementClass}`)
        }
      }
    }
  })

  useEffect(() => {
    const ideSkillElement = document.querySelector('.cv__skill__ide')
    if (ideSkillElement) {
      let ideSkillCount = ideSkillElement.childElementCount
      for (let i = 0; i < ideSkillCount; i++) {
        const ideElementClass = `cv__skill__ide--${i}`
        if (ideElementClass) {
          floatRandom(`.${ideElementClass}`)
        }
      }
    }
  })

  useEffect(() => {
    const softwareSkillElement = document.querySelector('.cv__skill__software')
    if (softwareSkillElement) {
      let softwareSkillCount = softwareSkillElement.childElementCount
      for (let i = 0; i < softwareSkillCount; i++) {
        const softwareElementClass = `cv__skill__software--${i}`
        if (softwareElementClass) {
          floatRandom(`.${softwareElementClass}`)
        }
      }
    }
  })

  return (
    <>
      <div className="screen random">
        {cvData.map((cv, index) => {
          return (
            <li className="cv" key={index}>
              {cv.skill.map((skill, index) => {
                return (
                  <div className="cv__skill" key={index}>
                    <div className="cv__skill__front">
                      {skill.frontend.map((frontSkill, index) => {
                        return (
                          <Skill
                            className={'cv__skill__front--' + index}
                            children={frontSkill}
                            index={index}
                          />
                        )
                      })}
                    </div>
                    <div className="cv__skill__back">
                      {skill.backend.map((backSkill, index) => {
                        return (
                          <Skill
                            className={'cv__skill__back--' + index}
                            children={backSkill}
                            index={index}
                          />
                        )
                      })}
                    </div>
                    <div className="cv__skill__ide">
                      {skill.ide.map((ideSkill, index) => {
                        return (
                          <Skill
                            className={'cv__skill__ide--' + index}
                            children={ideSkill}
                            index={index}
                          />
                        )
                      })}
                    </div>
                    <div className="cv__skill__software">
                      {skill.software.map((softwareSkill, index) => {
                        return (
                          <Skill
                            className={'cv__skill__software--' + index}
                            children={softwareSkill}
                            index={index}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </li>
          )
        })}
      </div>
    </>
  )
}

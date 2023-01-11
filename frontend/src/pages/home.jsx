import '../utils/style/home.scss'

import React, { useContext, useEffect, useState } from 'react'

import { PortfolioContext } from '../utils/contexts/portfolioContext'

import LeftCol from '../components/Organisms/leflCol'
import MiddleCol from '../components/Organisms/middleCol'
import RightCol from '../components/Organisms/rightCol'

export default function Cv() {
  const { cvData, floatingSkill, isCv, setIsCv } = useContext(PortfolioContext)

  const [level, setLevel] = useState('')
  const [yearInput, setYearInput] = useState(2022)

  useEffect(() => {
    floatingSkill('softSkill')
  }, [floatingSkill])

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(`mousePosX=${e.clientX} - mousePosY=${e.clientY}`)
      // const arm = document.querySelector('.arm')
      // if (arm) {
      //   arm.style.top = `${e.clientY}px`
      //   arm.style.left = `${e.clientX}px`
      // }
    }
    window.addEventListener('onClick', mouseMove)
  }, [])

  const handleCvClick = () => {
    setTimeout(() => {
      setIsCv(!isCv)
    }, 1000)
  }

  return (
    <>
      {cvData.map((cv, index) => {
        for (let i = 0; i < cv.experience.length; i++) {
          const startDateYear = cv.experience[i].startDate.replace(/\D/g, '')
          const endDateYear = cv.experience[i].endDate.replace(/\D/g, '')
          const expElement = document.getElementsByClassName(
            `main__rack__exp__content--${i}`
          )
          if (
            expElement[0] &&
            yearInput >= startDateYear &&
            yearInput <= endDateYear
          ) {
            expElement[0].classList.add('firstPlan')
          }
          if (
            expElement[0] &&
            (yearInput < startDateYear || yearInput > endDateYear)
          ) {
            expElement[0].classList.remove('firstPlan')
          }
        }
        return (
          <div className="board" key={index}>
            <div className="leftBox">
              <LeftCol cv={cv} index={index} isCv={isCv} />
            </div>
            <div className="middleBox">
              <MiddleCol
                cv={cv}
                handleClick={handleCvClick}
                setIsCv={setIsCv}
              />
            </div>
            <div className="rightBox">
              <RightCol cv={cv} />
            </div>
          </div>
        )
      })}
    </>
  )
}

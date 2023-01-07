import '../utils/style/home.scss'

import React, { useContext, useEffect, useState } from 'react'

import { PortfolioContext } from '../utils/contexts/portfolioContext'

import LeftCol from '../components/Organisms/leflCol'
import MiddleCol from '../components/Organisms/middleCol'
import RightCol from '../components/Organisms/rightCol'

export default function Cv() {
  const { cvData, floatingSkill } = useContext(PortfolioContext)

  const [level, setLevel] = useState('')
  const [yearInput, setYearInput] = useState(2022)

  useEffect(() => {
    floatingSkill('softSkill')
  }, [floatingSkill])

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
            {/* <div className="timeScroller">
                <label htmlFor="yearRange">{yearInput}</label>
                <input
                  type="range"
                  className="timeScroller__btn"
                  id="yearRange"
                  min="1994"
                  max="2022"
                  onChange={() =>
                    setYearInput(document.getElementById('yearRange').value)
                  }
                ></input>
              </div> */}
            <LeftCol cv={cv} index={index} />
            <MiddleCol cv={cv} />
            <RightCol cv={cv} />
          </div>
        )
      })}
    </>
  )
}

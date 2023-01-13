import { useState, useContext } from 'react'

import { Experience } from '../Molecules/experience'
import { Education } from '../Molecules/education'

import { PortfolioContext } from '../../utils/contexts/portfolioContext'

import Invert from '../Effects/Invert'

import picture from '../../utils/images/MRa-1.png'

export default function LeftCol({ cv }) {
  const { leftColShow } = useContext(PortfolioContext)

  const [targetCatElement, setTargetCatElement] = useState('')

  const handleClick = (index, category) => {
    setTargetCatElement(`${category}`)
    console.log(targetCatElement)
    const leftBox = document.querySelector('.leftBox')
    const categoryElement = document.querySelector(`.leftBox__cv__${category}`)
    const targetElement = document.querySelector(
      `.leftBox__cv__${category}__content--${index}`
    )
    const firstPlanElement = document.querySelector('#firstPlan')
    const firstPlanCategory = document.querySelector('#firstPlanCat')
    leftBox.style.zIndex = '2'
    if (firstPlanElement && firstPlanElement !== targetElement) {
      firstPlanElement.removeAttribute('style')
      firstPlanElement.setAttribute('id', 'backPlan')
      firstPlanCategory.setAttribute('id', 'backPlanCat')
      const lastCatElement = document.querySelector(
        `.leftBox__cv__${targetCatElement}`
      )
      if (lastCatElement !== categoryElement) {
        lastCatElement.removeAttribute('style')
      }
      getFirstPlan(targetElement, categoryElement)
    } else if (firstPlanElement && firstPlanElement === targetElement) {
      firstPlanElement.setAttribute('id', 'backPlan')
      firstPlanCategory.setAttribute('id', 'backPlanCat')
    } else {
      getFirstPlan(targetElement, categoryElement)
    }
  }

  const getFirstPlan = (element, catElement) => {
    element.setAttribute('id', 'firstPlan')
    catElement.setAttribute('id', 'firstPlanCat')
    armMove(element)
  }

  const armMove = (element) => {
    if (element) {
      let elementPos = element.getBoundingClientRect()
      let elementW = element.offsetWidth
      let elementH = element.offsetHeight
      let elementY = element.pageYOffset
      let elementX = element.pageXOffset
      const arm = document.querySelector('.arm')
      console.log(arm)
      if (arm) {
        arm.style.top = `${elementPos.top}px`
        arm.style.left = `${elementPos.left}px`
        arm.style.width = `${elementPos.width}px`
      }
    }
  }

  return (
    <>
      <div className="leftBox__background"></div>
      {leftColShow === 'cv' && (
        <Invert elementClass="leftBox__cv" category="cv">
          <div className="leftBox__cv__exp">
            <div className="leftBox__cv__exp__title">EXPERIENCE</div>
            <div className="leftBox__cv__exp__content">
              <Experience
                experience={cv.experience}
                className={'leftBox__cv__exp__content'}
                handleClick={handleClick}
              />
            </div>
          </div>
          <div className="leftBox__cv__edu">
            <div className="leftBox__cv__edu__title">EDUCATION</div>
            <div className="leftBox__cv__edu__content">
              <Education
                education={cv.education}
                className={'leftBox__cv__edu__content'}
                handleClick={handleClick}
              />
            </div>
          </div>
        </Invert>
      )}
      {leftColShow === 'identity' && (
        <Invert elementClass="leftBox__identity" category="identity">
          <div className="leftBox__identity__picture">
            <img src={picture} alt="" className="" />
          </div>
        </Invert>
      )}
    </>
  )
}

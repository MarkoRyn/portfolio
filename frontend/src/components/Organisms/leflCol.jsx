import { useState, useContext, useEffect } from 'react'

import { Experience } from '../Molecules/experience'
import { Education } from '../Molecules/education'

import { PortfolioContext } from '../../utils/contexts/portfolioContext'

import { Inverting } from '../Effects/Inverting'

import picture from '../../utils/images/MRa-1.png'

import { FrameSvg } from '../Atoms/frameSvg'

export const LeftCol = ({ cv }) => {
  const {
    colShow,
    colDelay,
    categoryText,
    setCategoryText,
    cvData,
    resetScreen,
    setResetScreen,
  } = useContext(PortfolioContext)

  const [targetCatElement, setTargetCatElement] = useState('')

  const handleClick = (index, category) => {
    setCategoryText(cvData[0][category][index].titleId)
    setResetScreen(!resetScreen)
    setTargetCatElement(`${category}`)
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
    // armMove(element)
  }

  // const armMove = (element) => {
  //   if (element) {
  //     let elementPos = element.getBoundingClientRect()
  //     let elementW = element.offsetWidth
  //     let elementH = element.offsetHeight
  //     let elementY = element.pageYOffset
  //     let elementX = element.pageXOffset
  //     const arm = document.querySelector('.arm')
  //     console.log(arm)
  //     if (arm) {
  //       arm.style.top = `${elementPos.top}px`
  //       arm.style.left = `${elementPos.left}px`
  //       arm.style.width = `${elementPos.width}px`
  //     }
  //   }
  // }
  return (
    <>
      <div className="leftBox__background"></div>
      <FrameSvg />
      {colShow === 'cv' && (
        <Inverting
          elementClass="leftBox__cv"
          category="cv"
          show={colShow}
          delay={colDelay}
        >
          <div className="leftBox__cv__experience">
            <div className="leftBox__cv__experience__title">EXPERIENCE</div>
            <div
              className="leftBox__cv__experience__content"
              style={{ height: `${cv.experience.length * 50}px` }}
            >
              <Experience
                experience={cv.experience}
                className={'leftBox__cv__experience__content'}
                handleClick={handleClick}
              />
            </div>
          </div>
          <div className="leftBox__cv__education">
            <div className="leftBox__cv__education__title">EDUCATION</div>
            <div
              className="leftBox__cv__education__content"
              style={{ height: `${cv.education.length * 50}px` }}
            >
              <Education
                education={cv.education}
                className={'leftBox__cv__education__content'}
                handleClick={handleClick}
              />
            </div>
          </div>
        </Inverting>
      )}
      {colShow === 'identity' && (
        <Inverting
          elementClass="leftBox__identity"
          category="identity"
          show={colShow}
          delay={colDelay}
        >
          <div className="leftBox__identity__picture">
            <img src={picture} alt="" className="" />
          </div>
        </Inverting>
      )}
    </>
  )
}

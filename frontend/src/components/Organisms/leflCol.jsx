import { useState } from 'react'

import { Experience } from '../Molecules/experience'
import { Education } from '../Molecules/education'

export default function LeftCol({ cv }) {
  const handleClick = (index, category) => {
    const board = document.querySelector('.board')
    const targetElement = document.querySelector(
      `.board__leftCol__${category}__content--${index}`
    )
    const firstPlanElement = document.querySelector('#firstPlan')
    board.removeAttribute('style')
    board.style.setProperty('--zIndexLeftCol', 2)
    board.style.setProperty('--zIndexExp', 2)
    // board.style.setProperty(`--zIndexExp${index}`, 2)
    if (firstPlanElement && firstPlanElement !== targetElement) {
      firstPlanElement.setAttribute('id', 'backPlan')
      targetElement.setAttribute('id', 'firstPlan')
    } else {
      targetElement.setAttribute('id', 'firstPlan')
    }

    console.log(index)
    console.log(firstPlanElement)
    console.log(targetElement)
  }

  return (
    <div className="board__leftCol">
      <div className="board__leftCol__exp">
        <div className="board__leftCol__exp__title">EXPERIENCE</div>
        <div className="board__leftCol__exp__content">
          <Experience
            experience={cv.experience}
            className={'board__leftCol__exp__content'}
            handleClick={handleClick}
          />
        </div>
      </div>
      <div className="board__leftCol__edu">
        <div className="board__leftCol__edu__title">EDUCATION</div>
        <div className="board__leftCol__edu__content">
          <Education
            education={cv.education}
            className={'board__leftCol__edu__content'}
          />
        </div>
      </div>
    </div>
  )
}

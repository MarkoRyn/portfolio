import { useContext, useState } from 'react'
import { PortfolioContext } from '../../utils/contexts/portfolioContext'
import { Skill } from '../Molecules/skill'

import { Floating } from '../Effects/Floating'
import { Typing } from '../Effects/Typing'

import { ButtonsBoard } from '../Molecules/buttonsBoard'
import { EmptyCase } from '../Molecules/emptyCase'

import bgImage from '../../utils/images/gearwheel-1.png'

export const MiddleCol = ({ cv }) => {
  const { descText, resetScreen } = useContext(PortfolioContext)
  const [animationPaused, setAnimationPaused] = useState(false)
  const [rotateDirection, setRotateDirection] = useState(false)

  const handleAnimationToggle = () => {
    setAnimationPaused(!animationPaused)
  }

  const handleChangeDirection = () => {
    setRotateDirection(!rotateDirection)
  }

  const sideStyle = {
    cube: {
      background:
        'linear-gradient(90deg, rgba(200, 200, 200, 1) 2%, rgba(70, 33, 00, 1) 10%, rgba(156, 94, 42, 1) 25%, rgba(70, 33, 00, 1) 60%, rgba(90, 60, 40, 1) 75%, rgba(75, 26, 0, 1) 100%)',
      border: '1px solid rgb(0, 0, 0)',
    },
    cylinder: {
      background: `url(${bgImage})`,
      backgroundSize: 'contain',
      // 'radial-gradient(circle, rgba(0, 0, 0, 1) 5%, rgba(70, 33, 00, 1) 15%, rgba(156, 94, 42, 1) 25%, rgba(70, 33, 00, 1) 60%, rgba(90, 60, 40, 1) 75%, rgba(75, 26, 0, 1) 100%)',
      border: '1px solid #381a00',
      // outline: 'solid rgb(76, 26, 10)',
    },
  }

  return (
    <div className="middleBox__middleCol">
      <div className="middleBox__middleCol__top">
        <ButtonsBoard className={'middleBox__middleCol__top'} />
      </div>
      <div className="middleBox__middleCol__screen">
        {/* <GearWheel
          className={'gearWheel'}
          id={'gearWheel--3'}
          wheelSettings={{ cogs: 9, wheelSize: 100 }}
          rotateDirection="right"
          speed={5}
          animationPaused={animationPaused}
          sideStyle={sideStyle}
        /> */}
        <div className="middleBox__middleCol__screen__border"></div>
        <div className="middleBox__middleCol__screen__content">
          <div className="middleBox__middleCol__screen__content__background"></div>
          {resetScreen && (
            <Typing
              className="middleBox__middleCol__screen__content__text"
              text={descText}
            ></Typing>
          )}
          {!resetScreen && (
            <Typing
              className="middleBox__middleCol__screen__content__text"
              text={descText}
            ></Typing>
          )}
        </div>
      </div>
      <div className="middleBox__middleCol__bottom">
        <div className="middleBox__middleCol__bottom__left">
          <div className="middleBox__middleCol__bottom__left__porthole">
            <div className="floating__skill">
              <Floating category="softSkill">
                <li className="floating__skill__softSkill">
                  {cv.softSkill.map((softSkill, index) => {
                    return (
                      <Skill
                        className={`floating__skill__softSkill--${index}`}
                        children={softSkill}
                        key={index}
                      />
                    )
                  })}
                </li>
              </Floating>
            </div>
            <div className="middleBox__middleCol__bottom__left__porthole__mask"></div>
          </div>
        </div>
        <div className="middleBox__middleCol__bottom__empty">
          <EmptyCase
            className={'middleBox__middleCol__bottom__empty'}
            sideStyle={sideStyle}
            animationPaused={animationPaused}
          />
        </div>
      </div>
    </div>
  )
}

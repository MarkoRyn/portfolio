import { useContext } from 'react'
import { PortfolioContext } from '../../utils/contexts/portfolioContext'
import { Skill } from '../Molecules/skill'

import { Floating } from '../Effects/Floating'
import { Typing } from '../Effects/Typing'

export const MiddleCol = ({ cv }) => {
  const { descText, resetScreen } = useContext(PortfolioContext)
  return (
    <div className="middleBox__middleCol">
      <div className="middleBox__middleCol__screen">
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
      <div className="middleBox__middleCol__porthole">
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
        <div className="middleBox__middleCol__porthole__mask"></div>
      </div>
    </div>
  )
}

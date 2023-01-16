import { Skill } from '../Molecules/skill'

import { Floating } from '../Effects/Floating'
import { Typing } from '../Effects/Typing'

export const MiddleCol = ({ cv, handleCvClick, handleIdClick }) => {
  return (
    <div className="middleBox__middleCol">
      <div className="middleBox__middleCol__screen">
        <div className="middleBox__middleCol__screen__border"></div>
        <div className="middleBox__middleCol__screen__content">
          <div className="middleBox__middleCol__screen__content__background"></div>
          <Typing
            className="middleBox__middleCol__screen__content__text"
            text="Bonjour, Je m'appelle Marcel. Je suis développeur web ! En reconversion professionnelle, je suis à la recherche d’un premier emploi dans ce domaine qui me passionne. Polyvalent et motivé, je souhaite acquérir de l’expérience afin d’évoluer dans ma carrière professionnelle."
          ></Typing>
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
      <div className="middleBox__middleCol__btn">
        <button onClick={handleCvClick}>CV</button>
        <button onClick={handleIdClick}>Identité</button>
      </div>
    </div>
  )
}

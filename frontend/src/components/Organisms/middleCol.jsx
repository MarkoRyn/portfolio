import { Skill } from '../Molecules/skill'

export default function MiddleCol({ cv, handleClick }) {
  return (
    <div className="middleBox__middleCol">
      <div className="middleBox__middleCol__screen">
        <div className="middleBox__middleCol__screen__content">
          Bonjour, Je m'appelle Marcel. Et je suis développeur web ! En
          reconversion professionnelle, je suis à la recherche d’un premier
          emploi dans ce domaine qui me passionne. Polyvalent et motivé, je
          souhaite acquérir de l’expérience afin d’évoluer dans ma carrière
          professionnelle.
        </div>
      </div>
      <div className="middleBox__middleCol__porthole">
        <div className="floating__skill">
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
        </div>
        <div className="middleBox__middleCol__porthole__mask"></div>
      </div>
      <div className="middleBox__middleCol__btn">
        <button onClick={handleClick}>CV</button>
      </div>
    </div>
  )
}

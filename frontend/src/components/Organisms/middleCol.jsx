import { useEffect } from 'react'
import { Skill } from '../Molecules/skill'

const descContent = document.querySelector(
  '.middleBox__middleCol__screen__content__text'
)
const text =
  "Bonjour, Je m'appelle Marcel. Je suis développeur web ! En reconversion professionnelle, je suis à la recherche d’un premier emploi dans ce domaine qui me passionne. Polyvalent et motivé, je souhaite acquérir de l’expérience afin d’évoluer dans ma carrière professionnelle."

function typeWriter(words, index) {
  if (index < words.length) {
    setTimeout(() => {
      descContent.innerHTML += `<span>${words[index]}</span>`
      typeWriter(text, index + 1)
    }, 50)
  }
}

export default function MiddleCol({ cv, handleCvClick, handleIdClick }) {
  useEffect(() => {
    const typing = setTimeout(() => {
      typeWriter(text, 0)
    }, 60)
    return () => {
      setTimeout(typing)
    }
  })
  return (
    <div className="middleBox__middleCol">
      <div className="middleBox__middleCol__screen">
        <div className="middleBox__middleCol__screen__border"></div>
        <div className="middleBox__middleCol__screen__content">
          <div className="middleBox__middleCol__screen__content__background"></div>
          <div className="middleBox__middleCol__screen__content__text"></div>
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
        <button onClick={handleCvClick}>CV</button>
        <button onClick={handleIdClick}>Identité</button>
      </div>
    </div>
  )
}

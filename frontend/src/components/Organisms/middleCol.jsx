import { Skill } from '../Molecules/skill'

export default function MiddleCol({ cv }) {
  return (
    <div className="board__middleCol">
      <div className="board__middleCol__screen"></div>
      <div className="board__middleCol__porthole">
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
        <div className="board__middleCol__porthole__mask"></div>
      </div>
    </div>
  )
}

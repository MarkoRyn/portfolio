import { AllSkills } from '../Molecules/allSkills'
import { Skill } from '../Molecules/skill'

export default function RightCol({ cv }) {
  return (
    <div className="board__rightCol">
      <div className="board__rightCol__skill">
        <div className="board__rightCol__skill__title">SKILLS</div>
        <div className="board__rightCol__skill__content">
          <AllSkills cv={cv} className={'board__rightCol__skill__content'} />
        </div>
      </div>
    </div>
  )
}

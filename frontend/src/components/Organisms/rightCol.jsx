import { AllSkills } from '../Molecules/allSkills'
import { Skill } from '../Molecules/skill'

export default function RightCol({ cv }) {
  return (
    <div className="rightBox__rightCol">
      <div className="rightBox__rightCol__skill">
        <div className="rightBox__rightCol__skill__title">SKILLS</div>
        <AllSkills cv={cv} className={'rightBox__rightCol__skill__content'} />
      </div>
    </div>
  )
}

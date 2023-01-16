import { AllSkills } from '../Molecules/allSkills'

export const RightCol = ({ cv }) => {
  return (
    <div className="rightBox__rightCol">
      <div className="rightBox__rightCol__skill">
        <div className="rightBox__rightCol__skill__title">SKILLS</div>
        <AllSkills cv={cv} className={'rightBox__rightCol__skill__content'} />
      </div>
    </div>
  )
}

import { Skill } from './skill'

export const AllSkills = ({ cv, className }) => {
  return (
    <>
      {cv.skill.map((skill, index) => {
        return (
          <div className={`${className}`} key={index}>
            <div className={`${className}__frontend`}>
              {skill.frontend.map((frontSkill, index) => {
                return (
                  <Skill
                    className={`${className}__frontend--${index}`}
                    children={frontSkill}
                    keyIndex={index}
                  />
                )
              })}
            </div>
            <div className={`${className}__backend`}>
              {skill.backend.map((backSkill, index) => {
                return (
                  <Skill
                    className={`${className}__backend--${index}`}
                    children={backSkill}
                    keyIndex={index}
                  />
                )
              })}
            </div>
            <div className={`${className}__ide`}>
              {skill.ide.map((ideSkill, index) => {
                return (
                  <Skill
                    className={`${className}__ide--${index}`}
                    children={ideSkill}
                    keyIndex={index}
                  />
                )
              })}
            </div>
            <div className={`${className}__software`}>
              {skill.software.map((softwareSkill, index) => {
                return (
                  <Skill
                    className={`${className}__software--${index}`}
                    children={softwareSkill}
                    keyIndex={index}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}

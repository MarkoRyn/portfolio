import { Element } from '../Atoms/element'

export const Experience = ({ experience, className }) => {
  return (
    <>
      {experience.map((exp, index) => {
        return (
          <div className={className} key={index}>
            <div className={className + '__header'}>
              <h3 className={className + '__header__title'}>{exp.title}</h3>
              <div className={className + '__header__company'}>
                {exp.company}
              </div>
            </div>
            <div className={className + '__content'}>
              <div className={className + '__content__location'}>
                {exp.location}
              </div>
              <div className={className + '__content__date'}>
                de {exp.startDate} à {exp.endDate}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

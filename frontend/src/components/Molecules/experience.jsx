export const Experience = ({ experience, className, handleClick }) => {
  return (
    <>
      {experience.map((exp, index) => {
        return (
          <div
            className={`${className}--${index}`}
            key={index}
            onClick={() => {
              handleClick(index, 'experience')
            }}
          >
            <div className={`${className}__back`}>
              <h3 className={`${className}__back__title`}>{exp.title}</h3>
              <div className={`${className}__back__company`}>{exp.company}</div>
              <div className={`${className}__back__location`}>
                {exp.location}
              </div>
              <div className={`${className}__back__date`}>
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            <div className={`${className}__front`}></div>
            <div className={`${className}__top`}></div>
            <div className={`${className}__bottom`}>{exp.title}</div>
            <div className={`${className}__left`}></div>
            <div className={`${className}__right`}></div>
          </div>
        )
      })}
    </>
  )
}

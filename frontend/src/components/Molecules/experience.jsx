export const Experience = ({ experience, className, handleClick }) => {
  return (
    <>
      {experience.map((exp, index) => {
        return (
          <div
            className={`${className}--${index}`}
            key={index}
            onClick={() => {
              handleClick(index, 'exp')
            }}
          >
            <div className={`${className}__back`}>
              <div className={`${className}__front__header`}>
                <h3 className={`${className}__front__header__title`}>
                  {exp.title}
                </h3>
                <div className={`${className}__front__header__company`}>
                  {exp.company}
                </div>
              </div>
              <div className={`${className}__front__content`}>
                <div className={`${className}__front__content__location`}>
                  {exp.location}
                </div>
                <div className={`${className}__front__content__date`}>
                  from {exp.startDate}
                  <br />
                  to {exp.endDate}
                </div>
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

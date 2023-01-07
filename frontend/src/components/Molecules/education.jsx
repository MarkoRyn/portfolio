export const Education = ({ education, className }) => {
  return (
    <>
      {education.map((edu, index) => {
        return (
          <div className={`${className}--${index}`} key={index}>
            <div className={`${className}__front`}>
              <div className={`${className}__front__header`}>
                <h3 className={`${className}__front__header__title`}>
                  {edu.title}
                </h3>
                <div className={`${className}__front__content__degree`}>
                  {edu.degree}
                </div>
                <div className={`${className}__front__header__company`}>
                  {edu.school}
                </div>
              </div>
              <div className={`${className}__front__content`}>
                <div className={`${className}__front__content__location`}>
                  {edu.location}
                </div>
                <div className={`${className}__front__content__date`}>
                  from {edu.startDate} to {edu.endDate}
                </div>
              </div>
            </div>
            <div className={`${className}__back`}></div>
            <div className={`${className}__top`}>{edu.title}</div>
          </div>
        )
      })}
    </>
  )
}

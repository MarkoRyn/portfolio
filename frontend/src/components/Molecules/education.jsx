export const Education = ({ education, className, handleClick }) => {
  return (
    <>
      {education.map((edu, index) => {
        return (
          <div
            className={`${className}--${index}`}
            key={index}
            onClick={() => {
              handleClick(index, 'education')
            }}
          >
            <div className={`${className}__back`}>
              <h3 className={`${className}__back__title`}>{edu.title}</h3>
              <div className={`${className}__back__degree`}>{edu.degree}</div>
              <div className={`${className}__back__company`}>{edu.school}</div>
              <div className={`${className}__back__location`}>
                {edu.location}
              </div>
              <div className={`${className}__back__date`}>
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
            <div className={`${className}__front`}></div>
            <div className={`${className}__top`}></div>
            <div className={`${className}__bottom`}>{edu.title}</div>
            <div className={`${className}__left`}></div>
            <div className={`${className}__right`}></div>
          </div>
        )
      })}
    </>
  )
}

export const Skill = ({ children, className, index }) => {
  return (
    <>
      <div className={className} key={index}>
        {children}
      </div>
    </>
  )
}

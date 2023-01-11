export const Skill = ({ children, className, keyIndex }) => {
  return (
    <div className={className} key={keyIndex}>
      {children}
    </div>
  )
}

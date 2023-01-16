export const Cylinder = ({ className }) => {
  return (
    <div class={`${className}__cylinder`}>
      <div class={`${className}__cylinder__front`}></div>
      <div class={`${className}__cylinder__back`}></div>
    </div>
  )
}

export const Cube = ({ className, index }) => {
  return (
    <div class={`${className}__cube cube-${index}`}>
      <div class={`${className}__cube__front`}></div>
      <div class={`${className}__cube__back`}></div>
      <div class={`${className}__cube__right`}></div>
      <div class={`${className}__cube__left`}></div>
      <div class={`${className}__cube__top`}></div>
      <div class={`${className}__cube__bottom`}></div>
    </div>
  )
}

export const CubeBottom = ({ className, index }) => {
  return (
    <div class={`${className}__cube cover-${index}`}>
      <div class={`${className}__cube__bottom`}></div>
    </div>
  )
}

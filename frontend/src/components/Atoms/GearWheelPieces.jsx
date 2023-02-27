export const Cylinder = ({ className, style, size, polygonSide }) => {
  console.log(polygonSide)
  return (
    <div className={`${className}__cylinder`} style={style}>
      <div
        className={`${className}__cylinder__front`}
        style={{
          borderRadius: `${size / 2}px`,
          transform: `rotateX(0deg) translateZ(${polygonSide / 2}px)`,
        }}
      ></div>
      <div
        className={`${className}__cylinder__back`}
        style={{
          borderRadius: `${size / 2}px`,
          transform: `rotateX(-180deg) translateZ(${polygonSide / 2}px)`,
        }}
      ></div>
    </div>
  )
}

export const Cube = ({ className, index, style, cubeSide, cogs }) => {
  return (
    <div className={`${className}__cube cube-${index}`} style={style}>
      <div
        className={`${className}__cube__front`}
        style={{
          width: `${cubeSide}px`,
          height: `${cubeSide}px`,
          transform: `rotateX(0deg) rotateZ(${
            (cogs - 6) * 1.25
          }deg) translateZ(${cubeSide / 2}px)`,
        }}
      ></div>
      <div
        className={`${className}__cube__back`}
        style={{
          width: `${cubeSide}px`,
          height: `${cubeSide}px`,
          transform: `rotateX(-180deg) rotateZ(-${
            (cogs - 6) * 1.25
          }deg) translateZ(${cubeSide / 2}px)`,
        }}
      ></div>
      <div
        className={`${className}__cube__right`}
        style={{
          width: `${cubeSide}px`,
          height: `${cubeSide}px`,
          transform: `rotateX(90deg) rotateY(${
            (cogs - 6) * 1.25
          }deg) translateZ(${cubeSide / 2}px)`,
        }}
      ></div>
      <div
        className={`${className}__cube__left`}
        style={{
          width: `${cubeSide}px`,
          height: `${cubeSide}px`,
          transform: `rotateX(-90deg) rotateY(-${
            (cogs - 6) * 1.25
          }deg) translateZ(${cubeSide / 2}px)`,
        }}
      ></div>
      <div
        className={`${className}__cube__top`}
        style={{
          width: `${cubeSide}px`,
          height: `${cubeSide}px`,
          transform: `rotateY(-90deg) rotateX(${
            (cogs - 6) * 1.25
          }deg) translateZ(${cubeSide / 2}px)`,
        }}
      ></div>
      <div
        className={`${className}__cube__bottom`}
        style={{
          width: `${cubeSide}px`,
          height: `${cubeSide}px`,
          transform: `rotateY(90deg) rotateX(-${
            (cogs - 6) * 1.25
          }deg) translateZ(${cubeSide / 2}px)`,
        }}
      ></div>
    </div>
  )
}

export const Cover = ({ className, index, style, coverSide, cogs }) => {
  console.log((cogs - 6) * 1.25)
  return (
    <div className={`${className}__cube cover-${index}`} style={style}>
      <div
        className={`${className}__cube__bottom`}
        style={{
          width: `${coverSide}px`,
          height: `${coverSide}px`,
          transform: `rotateY(90deg) rotateX(-${
            (cogs - 6) * 1.25
          }deg) translateZ(${coverSide / 2}px)`,
        }}
      ></div>
    </div>
  )
}

// export const Cube = ({ className, index }) => {
//   return (
//     <div class={`${className}__cube cube-${index}`}>
//       <div class={`${className}__cube__front`}></div>
//       <div class={`${className}__cube__back`}></div>
//       <div class={`${className}__cube__right`}></div>
//       <div class={`${className}__cube__left`}></div>
//       <div class={`${className}__cube__top`}></div>
//       <div class={`${className}__cube__bottom`}></div>
//     </div>
//   )
// }

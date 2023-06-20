export const Cylinder = ({
  className,
  style,
  size,
  polygonSide,
  cylinderStyle,
  is3D,
}) => {
  return (
    <div className={`${className}__cylinder`} style={style}>
      <div
        className={`${className}__cylinder__front`}
        style={{
          borderRadius: `${size / 2}px`,
          transform: `rotateX(0deg) translateZ(${polygonSide / 2}px)`,
          background: cylinderStyle.background,
          backgroundSize: cylinderStyle.backgroundSize,
          border: cylinderStyle.border,
          outline: cylinderStyle.outline,
        }}
      ></div>
      {is3D && (
        <div
          className={`${className}__cylinder__back`}
          style={{
            borderRadius: `${size / 2}px`,
            transform: `rotateX(-180deg) translateZ(${polygonSide / 2}px)`,
            background: cylinderStyle.background,
            backgroundSize: cylinderStyle.backgroundSize,
            border: cylinderStyle.border,
            outline: cylinderStyle.outline,
          }}
        ></div>
      )}
    </div>
  )
}

export const Cube = ({
  className,
  index,
  style,
  cubeSide,
  cogs,
  sideStyle,
  is3D,
}) => {
  const width = cubeSide
  const height = cubeSide
  return (
    <div className={`${className}__cube cube-${index}`} style={style}>
      <div
        className={`${className}__cube__front`}
        style={{
          width: `${height}px`,
          height: `${width}px`,
          transform: `rotateX(0deg) rotateZ(${
            (cogs - 6) * 1.25
          }deg) translateZ(${cubeSide / 2}px)`,
          background: sideStyle.background,
          border: sideStyle.border,
        }}
      ></div>
      {is3D && (
        <>
          <div
            className={`${className}__cube__back`}
            style={{
              width: `${height}px`,
              height: `${width}px`,
              transform: `rotateX(-180deg) rotateZ(-${
                (cogs - 6) * 1.25
              }deg) translateZ(${cubeSide / 2}px)`,
              background: sideStyle.background,
              border: sideStyle.border,
            }}
          ></div>
          <div
            className={`${className}__cube__right`}
            style={{
              width: `${height}px`,
              height: `${width}px`,
              transform: `rotateX(90deg) rotateY(${
                (cogs - 6) * 1.25
              }deg) translateZ(${cubeSide / 2}px)`,
              background: sideStyle.background,
              border: sideStyle.border,
            }}
          ></div>
          <div
            className={`${className}__cube__left`}
            style={{
              width: `${height}px`,
              height: `${width}px`,
              transform: `rotateX(-90deg) rotateY(-${
                (cogs - 6) * 1.25
              }deg) translateZ(${cubeSide / 2}px)`,
              background: sideStyle.background,
              border: sideStyle.border,
            }}
          ></div>
          <div
            className={`${className}__cube__top`}
            style={{
              width: `${width}px`,
              height: `${width}px`,
              transform: `rotateY(-90deg) rotateX(${
                (cogs - 6) * 1.25
              }deg) translateZ(${cubeSide / 2}px)`,
              background: sideStyle.background,
              border: sideStyle.border,
            }}
          ></div>
          <div
            className={`${className}__cube__bottom`}
            style={{
              width: `${width}px`,
              height: `${width}px`,
              transform: `rotateY(90deg) rotateX(-${
                (cogs - 6) * 1.25
              }deg) translateZ(${cubeSide / 2}px)`,
              background: sideStyle.background,
              border: sideStyle.border,
            }}
          ></div>
        </>
      )}
    </div>
  )
}

export const Cover = ({
  className,
  index,
  style,
  sideStyle,
  coverSide,
  cogs,
}) => {
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
          background: sideStyle.background,
          border: sideStyle.border,
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

import '../../utils/style/gearWheel.scss'

import { Cylinder, Cube, Cover } from '../Atoms/GearWheelPieces'

export const GearWheel = ({
  className,
  cogs,
  size,
  style,
  polygonSide,
  angle,
}) => {
  const wheelBoxClass = `${className}__wheelBox`
  console.log(cogs)
  console.log(angle)
  const wheelCogs = []
  for (let i = 0; i < cogs; i++) {
    wheelCogs.push(
      <>
        <Cube
          className={wheelBoxClass}
          index={i}
          style={{
            transform: `rotateZ(${
              i * angle * 2
            }deg) translate3d(-15%, 37.5%, 0)`,
          }}
          cubeSide={polygonSide}
          cogs={cogs}
        />
        <Cover
          className={wheelBoxClass}
          index={i}
          style={{
            transform: `rotateZ(${
              i * angle * 2 - angle
            }deg) translate3d(-15%, 37.5%, 0)`,
          }}
          coverSide={polygonSide}
          cogs={cogs}
        />
      </>
    )
  }
  console.log(wheelCogs)
  return (
    <div className={className} style={style}>
      <div className={wheelBoxClass}>
        <Cylinder
          className={wheelBoxClass}
          size={size}
          polygonSide={polygonSide}
        />
        {wheelCogs}
      </div>
    </div>
  )
}

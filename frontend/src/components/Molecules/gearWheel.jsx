import '../../utils/style/gearWheel.scss'

import { Cylinder, Cube, Cover } from '../Atoms/GearWheelPieces'

export const GearWheel = ({
  className,
  id,
  style,
  wheelSettings,
  rotateDirection,
  speed,
  animationPaused,
}) => {
  const wheelCogs = []
  const translate3d = {
    tx: `${wheelSettings.cogs * 1.35 - 28.5}%`,
    ty: '37.5%',
    tz: '0',
  }
  for (let i = 0; i < wheelSettings.cogs; i++) {
    wheelCogs.push(
      <>
        <Cube
          className={`${className}__wheelBox`}
          index={i}
          style={{
            transform: `rotateZ(${
              i * wheelSettings.angle * 2
            }deg) translate3d(${translate3d.tx}, ${translate3d.ty}, ${
              translate3d.tz
            })`,
          }}
          cubeSide={wheelSettings.polygonSide}
          cogs={wheelSettings.cogs}
        />
        <Cover
          className={`${className}__wheelBox`}
          index={i}
          style={{
            transform: `rotateZ(${
              i * wheelSettings.angle * 2 - wheelSettings.angle
            }deg) translate3d(${translate3d.tx}, ${translate3d.ty}, ${
              translate3d.tz
            })`,
          }}
          coverSide={wheelSettings.polygonSide}
          cogs={wheelSettings.cogs}
        />
      </>
    )
  }
  return (
    <div className={className} style={wheelSettings.style} id={id}>
      <div
        className={`${className}__wheelBox test`}
        style={{
          animation: `rotate-${rotateDirection} ${speed}s infinite linear`,
          animationPlayState: animationPaused ? 'paused' : 'running',
        }}
      >
        <Cylinder
          className={`${className}__wheelBox`}
          size={wheelSettings.size}
          polygonSide={wheelSettings.polygonSide}
        />
        {wheelCogs}
      </div>
    </div>
  )
}

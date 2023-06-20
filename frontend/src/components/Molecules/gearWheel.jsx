import '../../utils/style/gearWheel.scss'

import { Cylinder, Cube, Cover } from '../Atoms/GearWheelPieces'

export const GearWheel = ({
  className,
  id,
  sideStyle,
  wheelSettings,
  rotateDirection,
  speed,
  animationPaused,
}) => {
  const radius = wheelSettings.wheelSize / 2
  const angleDegree = 360 / (wheelSettings.cogs * 2)
  const angleRadian = (angleDegree * Math.PI) / 180
  const polygonSide = Math.sqrt(
    Math.pow(radius, 2) +
      Math.pow(radius, 2) -
      2 * radius * radius * Math.cos(angleRadian)
  )

  const cogs = wheelSettings.cogs
  const size = wheelSettings.wheelSize
  const angle = angleDegree
  const style = {
    width: `${wheelSettings.wheelSize}px`,
    height: `${wheelSettings.wheelSize}px`,
    marginTop: `${polygonSide}px`,
  }

  const wheelCogs = []
  const translate3d = {
    tx: `${cogs * 1.35 - 28.5}%`,
    ty: '37.5%',
    tz: '0',
  }

  for (let i = 0; i < cogs; i++) {
    wheelCogs.push(
      <>
        <Cube
          className={`${className}__wheelBox`}
          index={i}
          style={{
            transform: `rotateZ(${i * angle * 2}deg) translate3d(${
              translate3d.tx
            }, ${translate3d.ty}, ${translate3d.tz})`,
          }}
          cubeSide={polygonSide}
          cogs={cogs}
          sideStyle={sideStyle.cube}
        />
        <Cover
          className={`${className}__wheelBox`}
          index={i}
          style={{
            transform: `rotateZ(${i * angle * 2 - angle}deg) translate3d(${
              translate3d.tx
            }, ${translate3d.ty}, ${translate3d.tz})`,
          }}
          coverSide={polygonSide}
          cogs={cogs}
          sideStyle={sideStyle.cube}
        />
      </>
    )
  }
  return (
    <div className={className} style={style} id={id}>
      <div
        className={`${className}__wheelBox test`}
        style={{
          animation: `rotate-${rotateDirection} ${speed}s infinite linear`,
          animationPlayState: animationPaused ? 'paused' : 'running',
        }}
      >
        <Cylinder
          className={`${className}__wheelBox`}
          size={size}
          polygonSide={polygonSide}
          cylinderStyle={sideStyle.cylinder}
        />
        {wheelCogs}
      </div>
    </div>
  )
}

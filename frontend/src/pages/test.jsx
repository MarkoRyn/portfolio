import { GearWheel } from '../components/Molecules/gearWheel'

export default function Test() {
  const cogs = 10
  const wheelSize = 200
  const radius = wheelSize / 2
  const angleDegree = 360 / (cogs * 2)
  const angleRadian = (angleDegree * Math.PI) / 180
  const polygonSide = Math.sqrt(
    Math.pow(radius, 2) +
      Math.pow(radius, 2) -
      2 * radius * radius * Math.cos(angleRadian)
  )
  console.log(polygonSide)
  console.log(angleDegree)
  console.log(angleRadian)

  return (
    <GearWheel
      className={'gearWheel'}
      cogs={cogs}
      size={wheelSize}
      style={{ width: `${wheelSize}px`, height: `${wheelSize}px` }}
      polygonSide={polygonSide}
      angle={angleDegree}
    />
  )
}

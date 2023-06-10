import { useState } from 'react'

import { GearWheel } from '../components/Molecules/gearWheel'

export default function Test() {
  const [animationPaused, setAnimationPaused] = useState(false)
  const [rotateDirection, setRotateDirection] = useState(false)

  const wheelSettings = (cogs, wheelSize) => {
    const radius = wheelSize / 2
    const angleDegree = 360 / (cogs * 2)
    const angleRadian = (angleDegree * Math.PI) / 180
    const polygonSide = Math.sqrt(
      Math.pow(radius, 2) +
        Math.pow(radius, 2) -
        2 * radius * radius * Math.cos(angleRadian)
    )

    return {
      cogs: cogs,
      size: wheelSize,
      polygonSide: polygonSide * 1,
      angle: angleDegree,
      style: {
        width: `${wheelSize}px`,
        height: `${wheelSize}px`,
        marginTop: `${polygonSide}px`,
      },
    }
  }

  const handleAnimationToggle = () => {
    setAnimationPaused(!animationPaused)
  }

  const handleChangeDirection = () => {
    setRotateDirection(!rotateDirection)
  }

  return (
    <>
      <GearWheel
        className={'gearWheel'}
        id={'gearWheel--1'}
        wheelSettings={wheelSettings(12, 150)}
        rotateDirection={rotateDirection ? 'left' : 'right'}
        speed={3}
        animationPaused={animationPaused}
      />
      <GearWheel
        className={'gearWheel'}
        id={'gearWheel--2'}
        wheelSettings={wheelSettings(8, 100)}
        rotateDirection={rotateDirection ? 'right' : 'left'}
        speed={2}
        animationPaused={animationPaused}
      />
      <GearWheel
        className={'gearWheel'}
        id={'gearWheel--3'}
        wheelSettings={wheelSettings(8, 100)}
        rotateDirection={rotateDirection ? 'left' : 'right'}
        speed={2}
        animationPaused={animationPaused}
      />
      <button onClick={handleAnimationToggle}>Pause</button>
      <button onClick={handleChangeDirection}>Changer de sens</button>
    </>
  )
}

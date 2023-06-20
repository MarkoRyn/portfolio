import { useState } from 'react'

import { GearWheel } from '../components/Molecules/gearWheel'
import bgImage from '../utils/images/gearwheel-1.png'

export default function Test() {
  const [animationPaused, setAnimationPaused] = useState(false)
  const [rotateDirection, setRotateDirection] = useState(false)

  const handleAnimationToggle = () => {
    setAnimationPaused(!animationPaused)
  }

  const handleChangeDirection = () => {
    setRotateDirection(!rotateDirection)
  }

  const sideStyle = {
    cube: {
      background: '#381a00',
      border: '1px solid rgb(0, 0, 0)',
    },
    cylinder: {
      background: `url(${bgImage})`,
      backgroundSize: 'contain',
      border: '1px solid #381a00',
      // outline: 'solid rgb(76, 26, 10)',
    },
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <div style={{ position: 'relative', top: '100px' }}>
        <GearWheel
          className={'gearWheel'}
          id={'gearWheel--1'}
          wheelSettings={{ cogs: 12, wheelSize: 150 }}
          rotateDirection={rotateDirection ? 'left' : 'right'}
          speed={3}
          animationPaused={animationPaused}
          sideStyle={sideStyle}
        />
        <GearWheel
          className={'gearWheel'}
          id={'gearWheel--2'}
          wheelSettings={{ cogs: 8, wheelSize: 100 }}
          rotateDirection={rotateDirection ? 'right' : 'left'}
          speed={2}
          animationPaused={animationPaused}
          sideStyle={sideStyle}
        />
        <GearWheel
          className={'gearWheel'}
          id={'gearWheel--3'}
          wheelSettings={{ cogs: 8, wheelSize: 80 }}
          rotateDirection={rotateDirection ? 'left' : 'right'}
          speed={2}
          animationPaused={animationPaused}
          sideStyle={sideStyle}
        />
      </div>
      <button onClick={handleAnimationToggle}>Pause</button>
      <button onClick={handleChangeDirection}>Changer de sens</button>
    </div>
  )
}

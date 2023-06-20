import { GearWheel } from './gearWheel'

export const EmptyCase = ({ className, sideStyle, animationPaused }) => {
  return (
    <>
      <GearWheel
        className={'gearWheel'}
        id={'gearWheel--4'}
        wheelSettings={{ cogs: 6, wheelSize: 80 }}
        rotateDirection="left"
        speed={2}
        animationPaused={animationPaused}
        sideStyle={sideStyle}
      />
      <div className={`${className}__shadow`}></div>
    </>
  )
}

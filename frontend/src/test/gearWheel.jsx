import './gearWheel.scss'
import { Cylinder, Cube, CubeBottom } from '../components/Atoms/GearWheelPieces'

export const GearWheel = () => {
  const wheelBoxClass = 'gearWheel__wheelBox'

  return (
    <div className="gearWheel">
      <div className={wheelBoxClass}>
        <Cylinder className={wheelBoxClass} />
        <Cube className={wheelBoxClass} index="1" />
        <Cube className={wheelBoxClass} index="2" />
        <Cube className={wheelBoxClass} index="3" />
        <Cube className={wheelBoxClass} index="4" />
        <Cube className={wheelBoxClass} index="5" />
        <Cube className={wheelBoxClass} index="6" />
        <CubeBottom className={wheelBoxClass} index="1" />
        <CubeBottom className={wheelBoxClass} index="2" />
        <CubeBottom className={wheelBoxClass} index="3" />
        <CubeBottom className={wheelBoxClass} index="4" />
        <CubeBottom className={wheelBoxClass} index="5" />
        <CubeBottom className={wheelBoxClass} index="6" />
      </div>
    </div>
  )
}

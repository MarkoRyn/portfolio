import { useContext } from 'react'

import { AllSkills } from '../Molecules/allSkills'

import { PortfolioContext } from '../../utils/contexts/portfolioContext'

import { Inverting } from '../Effects/Inverting'

import { FrameSvg } from '../Atoms/frameSvg'

export const RightCol = ({ cv }) => {
  const { colShow, colDelay } = useContext(PortfolioContext)

  return (
    <>
      <div className="rightBox__background"></div>
      <FrameSvg />
      {colShow === 'cv' && (
        <>
          <Inverting
            elementClass="rightBox__cv"
            category="cv"
            show={colShow}
            delay={colDelay}
          >
            <div className="rightBox__cv__skill">
              <div className="rightBox__cv__skill__title">SKILLS</div>
              <AllSkills cv={cv} className={'rightBox__cv__skill__content'} />
            </div>
          </Inverting>
        </>
      )}

      {colShow === 'identity' && (
        <Inverting
          elementClass="rightBox__identity"
          category="identity"
          show={colShow}
          delay={colDelay}
        >
          <div className="rightBox__identity">RIGHTCOL</div>
        </Inverting>
      )}
    </>
  )
}

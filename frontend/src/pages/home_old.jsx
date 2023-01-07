import '../utils/style/home.scss'

// import fart from '../utils/sounds/fart1.mp3'

import React, { useContext, useEffect } from 'react'
import { Skill } from '../components/Molecules/skill'

import { PortfolioContext } from '../utils/contexts/portfolioContext'

export default function Cv() {
  const { cvData, floatingSkill } = useContext(PortfolioContext)

  useEffect(() => {
    floatingSkill('front')
    floatingSkill('back')
    floatingSkill('ide')
    floatingSkill('software')
  })

  return (
    <>
      <div className="screen random">
        {cvData.map((cv, index) => {
          return (
            <li className="cv" key={index}>
              {cv.skill.map((skill, index) => {
                return (
                  <div className="cv__skill" key={index}>
                    <div className="cv__skill__front">
                      {skill.frontend.map((frontSkill, index) => {
                        console.log(index)
                        return (
                          <Skill
                            className={'cv__skill__front--' + index}
                            children={frontSkill}
                            index={index}
                          />
                        )
                      })}
                    </div>
                    <div className="cv__skill__back">
                      {skill.backend.map((backSkill, index) => {
                        return (
                          <Skill
                            className={'cv__skill__back--' + index}
                            children={backSkill}
                            index={index}
                          />
                        )
                      })}
                    </div>
                    <div className="cv__skill__ide">
                      {skill.ide.map((ideSkill, index) => {
                        return (
                          <Skill
                            className={'cv__skill__ide--' + index}
                            children={ideSkill}
                            index={index}
                          />
                        )
                      })}
                    </div>
                    <div className="cv__skill__software">
                      {skill.software.map((softwareSkill, index) => {
                        return (
                          <Skill
                            className={'cv__skill__software--' + index}
                            children={softwareSkill}
                            index={index}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </li>
          )
        })}
      </div>
    </>
  )
}

import '../utils/style/cv.scss'
import { Experience } from '../components/Molecules/experience'

import React, { useContext } from 'react'

import { PortfolioContext } from '../utils/contexts/portfolioContext'
import CvServices from '../api/Services/CvServices'

const cvServices = new CvServices()

export default function Cv() {
  const { cvData } = useContext(PortfolioContext)

  return (
    <>
      <div>CURRICULUM VITAE</div>
      {cvData.map((cv, index) => {
        return (
          <li className="cv" key={index}>
            <div className="cv__experience">
              <div className="cv__experience__title">EXPERIENCE</div>
              <Experience
                experience={cv.experience}
                className="cv__experience__content"
              />
            </div>

            {cv.education.map((edu, index) => {
              return (
                <div className="cv__education" key={index}>
                  <div className="">{edu.title}</div>
                </div>
              )
            })}
          </li>
        )
      })}
    </>
  )
}

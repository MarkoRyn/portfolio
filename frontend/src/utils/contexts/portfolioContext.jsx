import cvJsonData from '../../api/Datas/cv.json'

import React, { createContext, useState, useEffect } from 'react'

import UserService from '../../api/Services/UserServices'
const userServices = new UserService()

export const PortfolioContext = createContext({})

export const PostProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([])
  const [userIdData, setUserIdData] = useState([])
  const [cvData, setCvData] = useState([])
  const userId = localStorage.getItem('userId')
  const expirationDate = localStorage.getItem('expirationDate')
  const [isLoading, setIsLoading] = useState(true)

  const [isCv, setIsCv] = useState(false)

  function getRandom(min, max) {
    return Math.random() * (max - min) + min
  }

  const containerW = 200
  const containerH = 200

  const floatRandom = (elementClass) => {
    const floatElement = document.querySelector(elementClass)
    if (floatElement) {
      let elementW = floatElement.offsetWidth
      let elementH = floatElement.offsetHeight
      let elementL = floatElement.offsetLeft
      let elementR = elementL + elementW
      let elementT = floatElement.offsetTop
      let elementB = elementT + elementH

      let y = []
      let x = []
      let z = []
      let brightness = []
      let zIndex = []
      let blur = []
      for (let i = 0; i <= 10; i++) {
        y[i] = getRandom(0 - containerH / 5, containerH)
        x[i] = getRandom(0 - containerW / 3, containerW)
        z[i] = z[i - 1] === 0 ? getRandom(-1000, 0) : 0
        brightness[i] = (z[i] + 1000) / 1000
        zIndex[i] = Math.round(z[i])
        blur[i] = z[i] / -200
        let animationDuration = getRandom(60, 180)
        floatElement.style.setProperty(`--y${i}`, `${y[i]}px`)
        floatElement.style.setProperty(`--x${i}`, `${x[i]}px`)
        floatElement.style.setProperty(`--z${i}`, `translateZ(${z[i]}px)`)
        floatElement.style.setProperty(
          `--brightness${i}`,
          `brightness(${brightness[i]}) blur(${blur[i]}px)`
        )
        floatElement.style.setProperty(`--zIndex${i}`, `${zIndex[i]}`)
        floatElement.style.setProperty(
          `--animation`,
          `floating ${animationDuration}s ease-in-out infinite`
        )
        floatElement.addEventListener('mouseover', () => {
          // playFart.play()
          floatElement.style.setProperty(
            `--brightness${i}`,
            `brightness(1) blur(0)`
          )
        })
        floatElement.addEventListener('mouseout', () => {
          // playFart.pause()
          floatElement.style.setProperty(
            `--brightness${i}`,
            `brightness(${brightness[i]}) blur(${blur[i]}px)`
          )
        })
      }
      let startScale = getRandom(1.5, 2)
      let endScale = getRandom(0.5, 1)
      floatElement.style.setProperty('--startScale', `${startScale}`)
      floatElement.style.setProperty('--endScale', `${endScale}`)
    }
  }

  const floatingSkill = (value) => {
    const skillElement = document.querySelector(`.floating__skill__${value}`)
    if (skillElement) {
      let skillCount = skillElement.childElementCount

      for (let i = 0; i < skillCount; i++) {
        const elementClass = `floating__skill__${value}--${i}`
        if (elementClass) {
          floatRandom(`.${elementClass}`)
        }
      }
    }
  }

  // to disconnect if token expired
  useEffect(() => {
    if (expirationDate && expirationDate * 1000 < Date.now()) {
      localStorage.clear()
      userServices.logoutUser()
    }
  }, [expirationDate])

  useEffect(() => {
    if (userId) {
      const getUsers = async () => {
        setIsLoading(true)
        const response = await userServices.getUser()
        setUsersData(response)
        setIsLoading(false)
      }
      getUsers()
    }
  }, [userId])

  useEffect(() => {
    const getCv = async () => {
      setIsLoading(true)
      setCvData(cvJsonData)
      setIsLoading(false)
    }
    getCv()
  }, [])

  // functions for re-rendering on every new api call
  // const getCv = async () => {
  //   const reRender = async () => {
  //     const reqRes = await cvServices.getCv()
  //     setCvData(reqRes)
  //   }
  //   reRender()
  // }

  const getCv = async () => {
    const reRender = async () => {
      setCvData(cvJsonData)
    }
    reRender()
  }

  const getUserId = async () => {
    const reRender = async () => {
      const reqRes = await userServices.getUserId()
      setUserIdData(reqRes)
    }
    reRender()
  }

  // const getUsers = async () => {
  //   const reRender = async () => {
  //     const reqRes = await userServices.getUser()
  //     setUsersData(reqRes)
  //   }
  //   reRender()
  // }

  return (
    <PortfolioContext.Provider
      value={{
        cvData,
        userId,
        isLoading,
        isCv,
        getCv,
        getUserId,
        setIsLoading,
        setIsCv,
        floatingSkill,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

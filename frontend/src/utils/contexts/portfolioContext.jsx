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

  const [leftColShow, setLeftColShow] = useState('identity')
  const [leftColDelay, setLeftColDelay] = useState('identity')

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
        leftColShow,
        leftColDelay,
        getCv,
        getUserId,
        setIsLoading,
        setLeftColShow,
        setLeftColDelay,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

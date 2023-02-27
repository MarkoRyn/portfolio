import cvJsonData from '../../api/Datas/cv.json'

import descJsonData from '../../api/Datas/description.json'

import React, { createContext, useState, useEffect } from 'react'

import UserService from '../../api/Services/UserServices'
const userServices = new UserService()

export const PortfolioContext = createContext({})

export const PortfolioProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([])
  const [userIdData, setUserIdData] = useState([])
  const [cvData, setCvData] = useState([])
  const [descText, setDescText] = useState()
  const [categoryText, setCategoryText] = useState('identity')
  const [isLoading, setIsLoading] = useState(true)
  const [resetScreen, setResetScreen] = useState(true)

  const [colShow, setColShow] = useState('identity')
  const [colDelay, setColDelay] = useState('identity')

  const userId = localStorage.getItem('userId')
  const expirationDate = localStorage.getItem('expirationDate')

  // to disconnect if token expired
  useEffect(() => {
    if (expirationDate && expirationDate * 1000 < Date.now()) {
      localStorage.clear()
      userServices.logoutUser()
    }
  }, [expirationDate])

  // useEffect(() => {
  //   if (userId) {
  //     const getUsers = async () => {
  //       setIsLoading(true)
  //       const response = await userServices.getUser()
  //       setUsersData(response)
  //       setIsLoading(false)
  //     }
  //     getUsers()
  //   }
  // }, [userId])

  useEffect(() => {
    const getCv = async () => {
      setIsLoading(true)
      setCvData(cvJsonData)
      setIsLoading(false)
    }
    getCv()
  }, [])

  useEffect(() => {
    const getDesc = async () => {
      setIsLoading(true)
      setDescText(descJsonData[categoryText])
      setIsLoading(false)
    }
    getDesc()
  }, [descText, categoryText])

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

  const getDesc = async () => {
    const reRender = async () => {
      setDescText(descJsonData[categoryText])
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
        descText,
        userId,
        isLoading,
        colShow,
        colDelay,
        categoryText,
        descJsonData,
        resetScreen,
        getCv,
        getUserId,
        getDesc,
        setIsLoading,
        setColShow,
        setColDelay,
        setDescText,
        setCategoryText,
        setResetScreen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

import '../utils/style/cv.scss'

import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormField, TextField } from '../components/Atoms/fields'
import { CancelButton, SendButton } from '../components/Atoms/buttons'
import FormData from 'form-data'

import CvServices from '../api/Services/CvServices'
import { PortfolioContext } from '../utils/contexts/portfolioContext'

export default function CreateCv() {
  const { userIdData, getCv } = useContext(PortfolioContext)
  const cvServices = new CvServices()
  const navigate = useNavigate()

  const [error, setError] = useState('')

  async function HandleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('posterId', userIdData._id)
    // formData.append('education', [])
    // formData.append('experience', [])
    // formData.append('skill', [])
    // formData.append('softSkill', [])
    // formData.append('interest', [])
    // formData.append('language', [])
    try {
      await cvServices.postCv(formData)
      getCv()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form className="postForm__front" onSubmit={HandleSubmit}>
        <div className="postForm__front__header">
          <div className="postForm__front__header__postImage">
            <FormField></FormField>
          </div>
        </div>
        <div className="postForm__front__content"></div>
        <div className="postForm__front__footer">
          <div className="postForm__front__footer__error">{error}</div>
          <div className="postForm__front__footer__createPostBtn">
            <CancelButton
              onClick={() => {
                navigate('/', { replace: true })
              }}
            />
            <SendButton />
          </div>
        </div>
      </form>
    </div>
  )
}

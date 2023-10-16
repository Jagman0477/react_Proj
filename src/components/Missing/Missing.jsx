import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Missing() {

  let navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
      <div className='d-flex justify-content-center align-items-center row' style={{marginTop: '15%'}}>
        <h1 className='fw-bold text-dark'>404 Page Not Found</h1>
        <button className='btn btn-dark w-25' onClick={goBack}>Go back</button>
      </div>
  )
}

import React from 'react'
import { selectArrowIcon } from '../../icons'
import './style.scss'

function ProfileButton() {
  return (
    <div className='profile-button' data-testid='profile-button'>
      {/* <img
        src='#'
        alt='User Profile'
        className='profile-image'
      /> */}
      <div className='profile-image'/>
      <p>Beatriz</p>
      { selectArrowIcon }
    </div>
  )
}

export default ProfileButton
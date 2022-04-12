import React from 'react'
import ProfileImg from '../../../assets/images/VinitPort.jpg'
import './index.scss'

function ProfileImage() {
  return (
    <div className="profile">
      <img className="profile-img" src={ProfileImg} alt="profile-img" />
    </div>
  )
}

export default ProfileImage

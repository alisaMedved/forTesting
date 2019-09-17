import React from 'react'

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </React.Fragment>
  )
}

export default Profile

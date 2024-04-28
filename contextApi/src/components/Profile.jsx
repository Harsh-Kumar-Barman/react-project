import React, { useContext } from 'react'
import UserContext from '../UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return <div>Welcome <b>{user.username}</b> and your password is <b>{user.password}</b></div>
}


export default Profile
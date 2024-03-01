import {React, useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
    if(user) return <div> Hi {user.name}</div>
}

export default Profile
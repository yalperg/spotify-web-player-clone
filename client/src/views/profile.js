import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile, getProfilePlaylists } from 'actions/profile'
import { profileActions } from 'store/profile-slice'

const Profile = () => {
  const userData = useSelector(state => state.user)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (userData.info.id !== id) {
      dispatch(getProfile(id))
      dispatch(getProfilePlaylists(id))
    }

    return () => {
      dispatch(profileActions.removeProfileData())
    }
  }, [dispatch, userData, id])
  return <h1>Alper</h1>
}

export default Profile

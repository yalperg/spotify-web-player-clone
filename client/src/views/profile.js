import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile, getProfilePlaylists } from 'actions/profile'
import { profileActions } from 'store/profile-slice'
import PorfileTop from 'components/profile-top'

const Profile = () => {
  const userData = useSelector(state => state.user)
  const profileData = useSelector(state => state.profile)
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

  return (
    <>
      <PorfileTop info={userData.info.id !== id ? profileData.info : userData.info } />
    </>
  )
}

export default Profile

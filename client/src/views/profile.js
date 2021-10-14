import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile, getProfilePlaylists } from 'actions/profile'
import { profileActions } from 'store/profile-slice'
/* import styles from 'assets/styles/container.module.scss' */
import PorfileTop from 'components/profile-top'

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

  return (
    <div>
      <PorfileTop />
    </div>
  )
}

export default Profile

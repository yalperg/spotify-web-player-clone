import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile, getProfilePlaylists } from 'actions/profile'
import { profileActions } from 'store/profile-slice'
import PorfileTop from 'components/profile-top'
import Section from 'components/section'
import styles from 'assets/styles/container.module.scss'

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
      <div className={styles.container}>
        <Section title='Public Playlists' items={userData.info.id !== id ? profileData.playlists  : userData.playlists.filter(playlist => playlist.public) } />
      </div>
    </>
  )
}

export default Profile

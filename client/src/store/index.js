import { configureStore } from '@reduxjs/toolkit'

import playlistsSlice from 'store/playlists-slice'
import authSlice from 'store/auth-slice'
import userSlice from 'store/user-slice'

const store = configureStore({
  reducer: {
    playlists: playlistsSlice,
    auth: authSlice,
    user: userSlice
  }
})

export default store
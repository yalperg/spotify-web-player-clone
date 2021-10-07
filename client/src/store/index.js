import { configureStore } from '@reduxjs/toolkit'

import playlistsSlice from 'store/playlists-slice'
import authSlice from 'store/auth-slice'

const store = configureStore({
  reducer: {
    playlists: playlistsSlice,
    auth: authSlice
  }
})

export default store
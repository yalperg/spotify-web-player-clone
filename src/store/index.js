import { configureStore } from '@reduxjs/toolkit'

import playlistsSlice from 'store/playlists-slice'

const store = configureStore({
  reducer: {
    playlists: playlistsSlice
  }
})

export default store